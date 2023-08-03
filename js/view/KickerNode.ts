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
import KickerCharacterSets from '../view/KickerCharacterSets.js';
import Multilink from '../../../axon/js/Multilink.js';

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
    const standingCharacterSetImage1 = new Image( playerImageSets[ 0 ].standing );
    const standingCharacterSetImage2 = new Image( playerImageSets[ 1 ].standing );
    const standingCharacterSetImage3 = new Image( playerImageSets[ 2 ].standing );

    this.addChild( standingCharacterSetImage1 );
    this.addChild( standingCharacterSetImage2 );
    this.addChild( standingCharacterSetImage3 );

    // Load in poisedToKick images for all locales
    const poisedToKickCharacterSetImage1 = new Image( playerImageSets[ 0 ].poisedToKick );
    const poisedToKickCharacterSetImage2 = new Image( playerImageSets[ 1 ].poisedToKick );
    const poisedToKickCharacterSetImage3 = new Image( playerImageSets[ 2 ].poisedToKick );

    this.addChild( poisedToKickCharacterSetImage1 );
    this.addChild( poisedToKickCharacterSetImage2 );
    this.addChild( poisedToKickCharacterSetImage3 );

    const kickingCharacterSetImage1 = new Image( playerImageSets[ 0 ].kicking );
    const kickingCharacterSetImage2 = new Image( playerImageSets[ 1 ].kicking );
    const kickingCharacterSetImage3 = new Image( playerImageSets[ 2 ].kicking );
    this.addChild( kickingCharacterSetImage1 );
    this.addChild( kickingCharacterSetImage2 );
    this.addChild( kickingCharacterSetImage3 );

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

    Multilink.multilink( [ kicker.characterSetProperty, kicker.poseProperty ], ( characterSet, pose ) => {

      // The first character set will be the default at startup when the character set property is null.
      standingCharacterSetImage1.visible = pose === Pose.STANDING && ( characterSet === KickerCharacterSets.CHARACTER_SET_1 || characterSet === null );
      poisedToKickCharacterSetImage1.visible = pose === Pose.POISED_TO_KICK && ( characterSet === KickerCharacterSets.CHARACTER_SET_1 || characterSet === null );
      kickingCharacterSetImage1.visible = pose === Pose.KICKING && ( characterSet === KickerCharacterSets.CHARACTER_SET_1 || characterSet === null );

      standingCharacterSetImage2.visible = pose === Pose.STANDING && characterSet === KickerCharacterSets.CHARACTER_SET_2;
      poisedToKickCharacterSetImage2.visible = pose === Pose.POISED_TO_KICK && characterSet === KickerCharacterSets.CHARACTER_SET_2;
      kickingCharacterSetImage2.visible = pose === Pose.KICKING && characterSet === KickerCharacterSets.CHARACTER_SET_2;

      standingCharacterSetImage3.visible = pose === Pose.STANDING && characterSet === KickerCharacterSets.CHARACTER_SET_3;
      poisedToKickCharacterSetImage3.visible = pose === Pose.POISED_TO_KICK && characterSet === KickerCharacterSets.CHARACTER_SET_3;
      kickingCharacterSetImage3.visible = pose === Pose.KICKING && characterSet === KickerCharacterSets.CHARACTER_SET_3;

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