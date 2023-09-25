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
import Multilink from '../../../axon/js/Multilink.js';
import KickerCharacterSetUSA from './KickerCharacterSetUSA.js';
import KickerCharacterSetAfrica from './KickerCharacterSetAfrica.js';
import KickerCharacterSetAfricaModest from './KickerCharacterSetAfricaModest.js';

type SelfOptions = EmptySelfOptions;
type KickerNodeOptions = SelfOptions & NodeOptions;

const SCALE = 0.31;

export default class KickerNode extends Node {
  public readonly kicker: Kicker;

  public constructor( kicker: Kicker, playerImageSets: KickerImageSet[], modelViewTransform: ModelViewTransform2, providedOptions?: KickerNodeOptions ) {
    super( {

      // Avoid a flickering on firefox where the image temporarily disappears (even in built mode)
      renderer: 'webgl',
      isDisposable: false
    } );

    this.kicker = kicker;

    // Load in standing images for all locales
    const standingCharacterSetImageUSA = new Image( playerImageSets[ 0 ].standing );
    const standingCharacterSetImageAfrica = new Image( playerImageSets[ 1 ].standing );
    const standingCharacterSetImageAfricaModest = new Image( playerImageSets[ 2 ].standing );

    this.addChild( standingCharacterSetImageUSA );
    this.addChild( standingCharacterSetImageAfrica );
    this.addChild( standingCharacterSetImageAfricaModest );

    // Load in poisedToKick images for all locales
    const poisedToKickCharacterSetImageUSA = new Image( playerImageSets[ 0 ].poisedToKick );
    const poisedToKickCharacterSetAfrica = new Image( playerImageSets[ 1 ].poisedToKick );
    const poisedToKickCharacterSetAfricaModest = new Image( playerImageSets[ 2 ].poisedToKick );

    this.addChild( poisedToKickCharacterSetImageUSA );
    this.addChild( poisedToKickCharacterSetAfrica );
    this.addChild( poisedToKickCharacterSetAfricaModest );

    const kickingCharacterSetImageUSA = new Image( playerImageSets[ 0 ].kicking );
    const kickingCharacterSetAfrica = new Image( playerImageSets[ 1 ].kicking );
    const kickingCharacterSetAfricaModest = new Image( playerImageSets[ 2 ].kicking );
    this.addChild( kickingCharacterSetImageUSA );
    this.addChild( kickingCharacterSetAfrica );
    this.addChild( kickingCharacterSetAfricaModest );

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
      standingCharacterSetImageUSA.visible = pose === Pose.STANDING && ( characterSet === KickerCharacterSetUSA || characterSet === null );
      poisedToKickCharacterSetImageUSA.visible = pose === Pose.POISED_TO_KICK && ( characterSet === KickerCharacterSetUSA || characterSet === null );
      kickingCharacterSetImageUSA.visible = pose === Pose.KICKING && ( characterSet === KickerCharacterSetUSA || characterSet === null );

      standingCharacterSetImageAfrica.visible = pose === Pose.STANDING && characterSet === KickerCharacterSetAfrica;
      poisedToKickCharacterSetAfrica.visible = pose === Pose.POISED_TO_KICK && characterSet === KickerCharacterSetAfrica;
      kickingCharacterSetAfrica.visible = pose === Pose.KICKING && characterSet === KickerCharacterSetAfrica;

      standingCharacterSetImageAfricaModest.visible = pose === Pose.STANDING && characterSet === KickerCharacterSetAfricaModest;
      poisedToKickCharacterSetAfricaModest.visible = pose === Pose.POISED_TO_KICK && characterSet === KickerCharacterSetAfricaModest;
      kickingCharacterSetAfricaModest.visible = pose === Pose.KICKING && characterSet === KickerCharacterSetAfricaModest;

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