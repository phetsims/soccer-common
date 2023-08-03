// Copyright 2023, University of Colorado Boulder

/**
 * Shows a cartoon representation of a soccer player which will kick a ball.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import { Image, Node, NodeOptions, Text } from '../../../scenery/js/imports.js';

import Kicker from '../model/Kicker.js';
import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import Vector2 from '../../../dot/js/Vector2.js';
import ModelViewTransform2 from '../../../phetcommon/js/view/ModelViewTransform2.js';
import Pose from '../model/Pose.js';
import { KickerPhase } from '../model/KickerPhase.js';
import { KickerImageSet } from './KickerCharacterSet.js';
import ToggleNode from '../../../sun/js/ToggleNode.js';
import KickerCharacterSets from '../view/KickerCharacterSets.js';

type SelfOptions = EmptySelfOptions;
type KickerNodeOptions = SelfOptions & NodeOptions;

const SCALE = 0.155;

export default class KickerNode extends Node {
  public readonly kicker: Kicker;

  public constructor( kicker: Kicker, playerImageSets: KickerImageSet[], modelViewTransform: ModelViewTransform2, providedOptions?: KickerNodeOptions ) {
    super( {

      // Avoid a flickering on firefox where the image temporarily disappears (even in built mode)
      renderer: 'webgl'
    } );

    this.kicker = kicker;

    // Load in standing images for all locales

    const standingNode = new ToggleNode( kicker.regionAndCultureProperty, [
      {
        createNode: () => new Image( playerImageSets[ 0 ].standing ),
        value: KickerCharacterSets.CHARACTER_SET_1
      },
      {
        createNode: () => new Image( playerImageSets[ 1 ].standing ),
        value: KickerCharacterSets.CHARACTER_SET_2
      },
      {
        createNode: () => new Image( playerImageSets[ 2 ].standing ),
        value: KickerCharacterSets.CHARACTER_SET_3
      }
    ] );

    this.addChild( standingNode );

    // Load in poisedToKick images for all locales

    const poisedToKickNode = new ToggleNode( kicker.regionAndCultureProperty, [
      {
        createNode: () => new Image( playerImageSets[ 0 ].poisedToKick ),
        value: KickerCharacterSets.CHARACTER_SET_1
      },
      {
        createNode: () => new Image( playerImageSets[ 1 ].poisedToKick ),
        value: KickerCharacterSets.CHARACTER_SET_2
      },
      {
        createNode: () => new Image( playerImageSets[ 2 ].poisedToKick ),
        value: KickerCharacterSets.CHARACTER_SET_3
      }
    ] );
    this.addChild( poisedToKickNode );

    // Load in kicking images for all locales
    const kickingNode = new ToggleNode( kicker.regionAndCultureProperty, [
      {
        createNode: () => new Image( playerImageSets[ 0 ].kicking ),
        value: KickerCharacterSets.CHARACTER_SET_1
      },
      {
        createNode: () => new Image( playerImageSets[ 1 ].kicking ),
        value: KickerCharacterSets.CHARACTER_SET_2
      },
      {
        createNode: () => new Image( playerImageSets[ 2 ].kicking ),
        value: KickerCharacterSets.CHARACTER_SET_3
      }
    ] );
    this.addChild( kickingNode );

    this.setScaleMagnitude( SCALE );

    // Show index when debugging with ?dev
    if ( phet.chipper.queryParameters.dev ) {
      this.addChild( new Text( kicker.initialPlaceInLine, {
        x: 130,
        y: 380,
        scale: 13
      } ) );
    }

    kicker.kickerPhaseProperty.link( phase => {
      this.visible = phase !== KickerPhase.INACTIVE;
    } );

    kicker.poseProperty.link( pose => {
      standingNode.visible = pose === Pose.STANDING;
      poisedToKickNode.visible = pose === Pose.POISED_TO_KICK;
      kickingNode.visible = pose === Pose.KICKING;
      this.centerBottom = modelViewTransform.modelToViewPosition( new Vector2( 0, 0 ) ).plusXY( -28, 8.5 );
    } );

    const options = optionize<KickerNodeOptions, SelfOptions, NodeOptions>()( {
      excludeInvisibleChildrenFromBounds: false,
      phetioVisiblePropertyInstrumented: false
    }, providedOptions );

    this.mutate( options );
  }
}

soccerCommon.register( 'KickerNode', KickerNode );