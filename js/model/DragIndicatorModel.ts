// Copyright 2023, University of Colorado Boulder

/**
 * A model that tracks whether soccerBalls have been dragged or not.
 * Will also determine if the dragIndicator needs to be visible.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 * @author Matthew Blackman (PhET Interactive Simulations)
 *
 */

import soccerCommon from '../soccerCommon.js';
import Property from '../../../axon/js/Property.js';
import BooleanProperty from '../../../axon/js/BooleanProperty.js';
import NullableIO from '../../../tandem/js/types/NullableIO.js';
import NumberIO from '../../../tandem/js/types/NumberIO.js';
import SoccerSceneModel from './SoccerSceneModel.js';
import TReadOnlyProperty from '../../../axon/js/TReadOnlyProperty.js';
import PickRequired from '../../../phet-core/js/types/PickRequired.js';
import { PhetioObjectOptions } from '../../../tandem/js/PhetioObject.js';

export default class DragIndicatorModel {

  //REVIEW comment here doesn't seem appropriate in common repo, specific to CAV
  public readonly isDragIndicatorVisibleProperty: Property<boolean>; // Screens 1-3
  public readonly valueProperty: Property<number | null>;
  public readonly soccerBallHasBeenDraggedProperty: Property<boolean>;

  public constructor( public readonly soccerBallsEnabledProperty: TReadOnlyProperty<boolean>, options: PickRequired<PhetioObjectOptions, 'tandem'> ) {

    this.soccerBallHasBeenDraggedProperty = new BooleanProperty( false, {
      tandem: options.tandem.createTandem( 'soccerBallHasBeenDraggedProperty' ),
      phetioFeatured: true
    } );

    this.isDragIndicatorVisibleProperty = new BooleanProperty( false, {
      tandem: options.tandem.createTandem( 'isDragIndicatorVisibleProperty' ),
      phetioFeatured: true
    } );

    // Cannot take a range, since it is nullable
    this.valueProperty = new Property<number | null>( null, {
      tandem: options.tandem.createTandem( 'valueProperty' ),
      phetioValueType: NullableIO( NumberIO ),
      phetioFeatured: true,
      phetioDocumentation: 'Sets the location of the hand/arrow on the number line. If one or more soccer balls exist at that location, the indicator appears on the topmost ball.'
    } );
  }

  public updateDragIndicator( sceneModel: SoccerSceneModel, soccerBallHasBeenDragged: boolean, soccerBallCount: number, maxKicks: number ): void {

    //  if an object was moved, objects are not input enabled, or the max number of balls haven't been kicked out
    //  don't show the dragIndicatorArrowNode
    this.isDragIndicatorVisibleProperty.value = !soccerBallHasBeenDragged &&
                                                soccerBallCount === maxKicks &&
                                                this.soccerBallsEnabledProperty.value &&
                                                _.every( sceneModel?.getActiveSoccerBalls(), soccerBall => soccerBall.valueProperty.value !== null );

    const reversedBalls = sceneModel.getActiveSoccerBalls().reverse();

    // Show the drag indicator over the most recently landed ball
    this.valueProperty.value = reversedBalls[ 0 ].valueProperty.value;
  }

  public reset(): void {
    this.soccerBallHasBeenDraggedProperty.reset();
  }
}

soccerCommon.register( 'DragIndicatorModel', DragIndicatorModel );