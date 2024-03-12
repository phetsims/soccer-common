// Copyright 2023-2024, University of Colorado Boulder

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
import { KickerImageSet } from './KickerPortrayal.js';
import Multilink from '../../../axon/js/Multilink.js';
import KickerPortrayalUSA from './KickerPortrayalUSA.js';
import KickerPortrayalAfrica from './KickerPortrayalAfrica.js';
import KickerPortrayalAfricaModest from './KickerPortrayalAfricaModest.js';

type SelfOptions = EmptySelfOptions;
type KickerNodeOptions = SelfOptions & NodeOptions;

const SCALE = 0.645;

export default class KickerNode extends Node {
  public readonly kicker: Kicker;

  public constructor( kicker: Kicker, playerImageSets: KickerImageSet[], modelViewTransform: ModelViewTransform2, providedOptions?: KickerNodeOptions ) {
    super( {

      // Avoid a flickering on firefox where the image temporarily disappears (even in built mode)
      // TODO: once svg images are in, remove webgl flag and send to QA, https://github.com/phetsims/soccer-common/issues/11
      renderer: 'webgl',
      isDisposable: false
    } );

    this.kicker = kicker;

    // Load in standing images for all locales
    const standingPortrayalImageUSA = new Image( playerImageSets[ 0 ].standing );
    const standingPortrayalImageAfrica = new Image( playerImageSets[ 1 ].standing );
    const standingPortrayalImageAfricaModest = new Image( playerImageSets[ 2 ].standing );

    this.addChild( standingPortrayalImageUSA );
    this.addChild( standingPortrayalImageAfrica );
    this.addChild( standingPortrayalImageAfricaModest );

    // Load in poisedToKick images for all locales
    const poisedToKickPortrayalImageUSA = new Image( playerImageSets[ 0 ].poisedToKick );
    const poisedToKickPortrayalAfrica = new Image( playerImageSets[ 1 ].poisedToKick );
    const poisedToKickPortrayalAfricaModest = new Image( playerImageSets[ 2 ].poisedToKick );

    this.addChild( poisedToKickPortrayalImageUSA );
    this.addChild( poisedToKickPortrayalAfrica );
    this.addChild( poisedToKickPortrayalAfricaModest );

    const kickingPortrayalImageUSA = new Image( playerImageSets[ 0 ].kicking );
    const kickingPortrayalAfrica = new Image( playerImageSets[ 1 ].kicking );
    const kickingPortrayalAfricaModest = new Image( playerImageSets[ 2 ].kicking );
    this.addChild( kickingPortrayalImageUSA );
    this.addChild( kickingPortrayalAfrica );
    this.addChild( kickingPortrayalAfricaModest );

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

    Multilink.multilink( [ kicker.portrayalProperty, kicker.poseProperty ], ( portrayal, pose ) => {

      // The first portrayal will be the default at startup, when portrayalProperty is null.
      standingPortrayalImageUSA.visible = pose === Pose.STANDING && ( portrayal === KickerPortrayalUSA || portrayal === null );
      poisedToKickPortrayalImageUSA.visible = pose === Pose.POISED_TO_KICK && ( portrayal === KickerPortrayalUSA || portrayal === null );
      kickingPortrayalImageUSA.visible = pose === Pose.KICKING && ( portrayal === KickerPortrayalUSA || portrayal === null );

      standingPortrayalImageAfrica.visible = pose === Pose.STANDING && portrayal === KickerPortrayalAfrica;
      poisedToKickPortrayalAfrica.visible = pose === Pose.POISED_TO_KICK && portrayal === KickerPortrayalAfrica;
      kickingPortrayalAfrica.visible = pose === Pose.KICKING && portrayal === KickerPortrayalAfrica;

      standingPortrayalImageAfricaModest.visible = pose === Pose.STANDING && portrayal === KickerPortrayalAfricaModest;
      poisedToKickPortrayalAfricaModest.visible = pose === Pose.POISED_TO_KICK && portrayal === KickerPortrayalAfricaModest;
      kickingPortrayalAfricaModest.visible = pose === Pose.KICKING && portrayal === KickerPortrayalAfricaModest;

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