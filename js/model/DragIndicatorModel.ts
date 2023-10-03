// Copyright 2023, University of Colorado Boulder

/**
 * DragIndicatorModel represents the state of drag indicators in the soccer area, keeping track of
 * drag states for soccer balls and determining the visibility of drag indicators.
 *
 * Features:
 * - Tracks if a soccer ball has been dragged.
 * - Determines if the drag indicator (hand/arrow) needs to be visible based on ball position.
 * - Provides an interface for updating drag indicators based on the state of the scene.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 * @author Matthew Blackman (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import Property from '../../../axon/js/Property.js';
import BooleanProperty from '../../../axon/js/BooleanProperty.js';
import NullableIO from '../../../tandem/js/types/NullableIO.js';
import NumberIO from '../../../tandem/js/types/NumberIO.js';
import TReadOnlyProperty from '../../../axon/js/TReadOnlyProperty.js';
import Tandem from '../../../tandem/js/Tandem.js';
import SoccerSceneModel from './SoccerSceneModel.js';
import PhetioObject from '../../../tandem/js/PhetioObject.js';

export default class DragIndicatorModel extends PhetioObject {

  // Whether the hand drag icon is currently showing on the soccer ball area
  public readonly isDragIndicatorVisibleProperty: Property<boolean>;

  // The value on the number line for the soccer ball that the drag indicator is currently over
  public readonly valueProperty: Property<number | null>;

  // Whether a soccer ball has ever been dragged to a new value in the current scene
  public readonly soccerBallHasBeenDraggedProperty: Property<boolean>;

  public constructor( protected readonly isKeyboardFocusedProperty: TReadOnlyProperty<boolean>,
                      public readonly soccerBallsEnabledProperty: TReadOnlyProperty<boolean>, tandem: Tandem ) {

    super( {
      tandem: tandem,
      phetioState: false,
      phetioDocumentation: 'This is the drag indicator (hand) that appears on a soccer ball after all balls have been kicked.'
    } );

    this.soccerBallHasBeenDraggedProperty = new BooleanProperty( false, {
      tandem: tandem.createTandem( 'soccerBallHasBeenDraggedProperty' ),
      phetioFeatured: false
    } );

    this.isDragIndicatorVisibleProperty = new BooleanProperty( false, {
      tandem: tandem.createTandem( 'isDragIndicatorVisibleProperty' ),
      phetioReadOnly: true,
      phetioFeatured: false
    } );

    // Cannot take a range, since it is nullable
    this.valueProperty = new Property<number | null>( null, {
      tandem: tandem.createTandem( 'valueProperty' ),
      phetioValueType: NullableIO( NumberIO ),
      phetioFeatured: false,
      phetioReadOnly: true,
      phetioDocumentation: 'Sets the location of the hand/arrow on the number line. If one or more soccer balls exist at that location, the indicator appears on the topmost ball.'
    } );
  }

  public updateDragIndicator( sceneModel: Pick<SoccerSceneModel, 'getActiveSoccerBalls' | 'getSortedStackedObjects'>, soccerBallCount: number, maxKicks: number ): void {

    //  if an object was moved, objects are not input enabled, or the max number of balls haven't been kicked out
    //  don't show the dragIndicatorArrowNode
    this.isDragIndicatorVisibleProperty.value = !this.soccerBallHasBeenDraggedProperty.value &&
                                                !this.isKeyboardFocusedProperty.value &&
                                                soccerBallCount === maxKicks &&
                                                this.soccerBallsEnabledProperty.value &&
                                                _.every( sceneModel?.getActiveSoccerBalls(), soccerBall => soccerBall.valueProperty.value !== null );

    const reversedBalls = sceneModel.getActiveSoccerBalls().filter( soccerBall => soccerBall.valueProperty.value !== null ).reverse();

    // Show the drag indicator over the most recently landed ball
    this.valueProperty.value = reversedBalls.length > 0 ? reversedBalls[ 0 ].valueProperty.value : null;
  }

  public reset(): void {
    this.soccerBallHasBeenDraggedProperty.reset();
  }
}

soccerCommon.register( 'DragIndicatorModel', DragIndicatorModel );