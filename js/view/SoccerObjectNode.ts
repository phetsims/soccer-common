// Copyright 2023, University of Colorado Boulder

/**
 * SoccerObjectNode represents a base class for visual nodes related to soccer objects, specifically `SoccerBallNode` and
 * `DataPointNode`.
 *
 * - Manages and translates the position of a soccer ball object.
 * - Handles the opacity of the soccer object based on its phase and value.
 * - Integrates with InteractiveHighlightingNode for interactive highlights.
 * - Offers debugging tools for the development phase.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import StrictOmit from '../../../phet-core/js/types/StrictOmit.js';
import { InteractiveHighlightingNode, NodeOptions, Text } from '../../../scenery/js/imports.js';
import SoccerBall from '../model/SoccerBall.js';
import ModelViewTransform2 from '../../../phetcommon/js/view/ModelViewTransform2.js';
import { SoccerBallPhase } from '../model/SoccerBallPhase.js';
import PickRequired from '../../../phet-core/js/types/PickRequired.js';
import Multilink from '../../../axon/js/Multilink.js';
import Vector2 from '../../../dot/js/Vector2.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import optionize from '../../../phet-core/js/optionize.js';
import soccerCommon from '../soccerCommon.js';

type SelfOptions = {
  translationStrategy?: ( position: Vector2 ) => void;
};

export type SoccerObjectNodeOptions =
  SelfOptions

  // Take all options from NodeOptions, but do not allow passing through inputEnabledProperty since it requires special handling in multilink
  & StrictOmit<NodeOptions, 'inputEnabledProperty'>
  & PickRequired<NodeOptions, 'tandem'>;

export default class SoccerObjectNode extends InteractiveHighlightingNode {
  protected constructor( public readonly soccerBall: SoccerBall,
                         modelViewTransform: ModelViewTransform2,
                         providedOptions?: SoccerObjectNodeOptions ) {

    const options = optionize<SoccerObjectNodeOptions, SelfOptions, NodeOptions>()( {
      cursor: 'pointer',
      translationStrategy: ( position: Vector2 ) => {
        this.translation = modelViewTransform.modelToViewPosition( position );
      },
      isDisposable: false
    }, providedOptions );
    super( options );

    soccerBall.positionProperty.link( position => {
      options.translationStrategy( position );
    } );

    // The initial ready-to-kick ball is full opacity. The rest of the balls waiting to be kicked are lower opacity so
    // they don't look like part of the data set, but still look kickable.
    Multilink.multilink( [ soccerBall.valueProperty, soccerBall.soccerBallPhaseProperty ],
      ( value, soccerBallPhase ) => {
        this.opacity = ( value === null && soccerBallPhase === SoccerBallPhase.READY && !soccerBall.isFirstSoccerBall ) ? 0.4 : 1;
      } );
  }

  public addDebugText( soccerBall: SoccerBall ): void {
    // Show index when debugging with ?dev
    if ( phet.chipper.queryParameters.dev ) {
      this.addChild( new Text( soccerBall.index + '', {
        font: new PhetFont( 14 ),
        fill: 'red',
        x: this.width / 2 + 1
      } ) );
    }
  }
}

soccerCommon.register( 'SoccerObjectNode', SoccerObjectNode );