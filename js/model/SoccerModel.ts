// Copyright 2023, University of Colorado Boulder

/**
 * SoccerModel is the base class for the soccer simulation. It manages the scene models and keyboard input properties.
 * It also handles the state and behavior of the soccer balls, including their interactions with the soccer field and
 * players.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import PhetioObject, { PhetioObjectOptions } from '../../../tandem/js/PhetioObject.js';
import optionize from '../../../phet-core/js/optionize.js';
import SoccerSceneModel from './SoccerSceneModel.js';
import Property from '../../../axon/js/Property.js';
import Tandem from '../../../tandem/js/Tandem.js';
import ReferenceIO from '../../../tandem/js/types/ReferenceIO.js';
import IOType from '../../../tandem/js/types/IOType.js';
import EnabledProperty from '../../../axon/js/EnabledProperty.js';
import DynamicProperty from '../../../axon/js/DynamicProperty.js';
import SoccerBall from './SoccerBall.js';
import TReadOnlyProperty from '../../../axon/js/TReadOnlyProperty.js';
import BooleanProperty from '../../../axon/js/BooleanProperty.js';
import DerivedProperty from '../../../axon/js/DerivedProperty.js';
import DragIndicatorModel from './DragIndicatorModel.js';


type SelfOptions = {
  dragIndicatorModelTandem?: Tandem | null;
};
type SoccerModelOptions = SelfOptions & PhetioObjectOptions;
export default class SoccerModel<T extends SoccerSceneModel> extends PhetioObject {

  public readonly selectedSceneModelProperty: Property<T>;
  public readonly soccerBallsEnabledProperty: Property<boolean>;

  protected readonly soccerAreaTandem: Tandem;

  protected readonly selectedSceneStackedSoccerBallCountProperty: DynamicProperty<number, number, SoccerSceneModel>;
  protected readonly selectedSceneMaxKicksProperty: DynamicProperty<number, number, SoccerSceneModel>;

  public readonly dragIndicatorModel: DragIndicatorModel;

  // Keyboard Input Properties
  // The soccerBall that is receiving highlight focus in the backLayerSoccerBallLayer group highlight.
  public readonly focusedSoccerBallProperty = new Property<SoccerBall | null>( null );
  public readonly isSoccerBallKeyboardGrabbedProperty = new Property( false );
  public readonly isGrabReleaseVisibleProperty: TReadOnlyProperty<boolean>;
  public readonly isKeyboardDragArrowVisibleProperty: TReadOnlyProperty<boolean>;
  public readonly isKeyboardSelectArrowVisibleProperty: TReadOnlyProperty<boolean>;
  public readonly isKeyboardFocusedProperty = new BooleanProperty( false );


  // Properties that switch to true when the specified action has occurred once.
  public readonly hasKeyboardGrabbedBallProperty = new BooleanProperty( false );
  public readonly hasKeyboardMovedBallProperty = new BooleanProperty( false );
  public readonly hasKeyboardSelectedDifferentBallProperty = new BooleanProperty( false );

  protected constructor( public readonly sceneModels: T[], providedOptions: SoccerModelOptions ) {
    const options = optionize<SoccerModelOptions, SelfOptions, PhetioObjectOptions>()( {
      isDisposable: false,
      dragIndicatorModelTandem: null
    }, providedOptions );

    super( options );

    this.soccerAreaTandem = options.tandem.createTandem( 'soccerArea' );

    this.selectedSceneModelProperty = new Property( sceneModels[ 0 ], {
      validValues: sceneModels,
      tandem: sceneModels.length === 1 ? Tandem.OPT_OUT : options.tandem.createTandem( 'selectedSceneModelProperty' ),
      phetioValueType: ReferenceIO( IOType.ObjectIO ),
      phetioFeatured: true,
      phetioDocumentation: 'Indicates which kicker is active by jersey number.'
    } );

    this.selectedSceneModelProperty.link( selectedScene => {
      this.sceneModels.forEach( sceneModel => {
        sceneModel.isVisibleProperty.value = sceneModel === selectedScene;
      } );

      this.focusedSoccerBallProperty.value = null;
    } );

    this.soccerBallsEnabledProperty = new EnabledProperty( true, {
      tandem: this.soccerAreaTandem.createTandem( 'soccerBallsEnabledProperty' ),
      phetioDocumentation: 'Enable or disable input on the entire set of soccer balls.',
      phetioFeatured: true,
      checkTandemName: false
    } );

    const dragIndicatorModelTandem = options.dragIndicatorModelTandem !== null ? options.dragIndicatorModelTandem : Tandem.OPT_OUT;
    this.dragIndicatorModel = new DragIndicatorModel( this.isKeyboardFocusedProperty, this.soccerBallsEnabledProperty, dragIndicatorModelTandem );

    // These DynamicProperties allow us to track all the necessary scenes Properties for dragIndicator update, and not
    // just the first selectedScene
    this.selectedSceneStackedSoccerBallCountProperty = new DynamicProperty<number, number, SoccerSceneModel>( this.selectedSceneModelProperty, {
      derive: 'numberOfDataPointsProperty'
    } );
    this.selectedSceneMaxKicksProperty = new DynamicProperty<number, number, SoccerSceneModel>( this.selectedSceneModelProperty, {
      derive: 'maxKicksProperty'
    } );

    this.isGrabReleaseVisibleProperty = new DerivedProperty( [ this.focusedSoccerBallProperty, this.hasKeyboardGrabbedBallProperty, this.isKeyboardFocusedProperty ],
      ( focusedSoccerBall, hasGrabbedBall, hasKeyboardFocus ) => {
        return focusedSoccerBall !== null && !hasGrabbedBall && hasKeyboardFocus;
      } );

    this.isKeyboardDragArrowVisibleProperty = new DerivedProperty( [ this.focusedSoccerBallProperty,
        this.isSoccerBallKeyboardGrabbedProperty, this.isKeyboardFocusedProperty, this.hasKeyboardMovedBallProperty ],
      ( focusedBall, isSoccerBallGrabbed, isKeyboardFocused, hasKeyboardMovedBall ) => {
        return focusedBall !== null && isSoccerBallGrabbed && isKeyboardFocused && !hasKeyboardMovedBall;
      } );

    this.isKeyboardSelectArrowVisibleProperty = new DerivedProperty( [ this.focusedSoccerBallProperty,
        this.isSoccerBallKeyboardGrabbedProperty, this.isKeyboardFocusedProperty, this.hasKeyboardSelectedDifferentBallProperty ],
      ( focusedBall, isSoccerBallGrabbed, isKeyboardFocused, hasKeyboardSelectedDifferentBall ) => {
        return focusedBall !== null && !isSoccerBallGrabbed && isKeyboardFocused && !hasKeyboardSelectedDifferentBall;
      } );
  }

  public step( dt: number ): void {
    // Override in subclasses

    this.selectedSceneModelProperty.value.step( dt );
  }

  public reset(): void {
    this.sceneModels.forEach( sceneModel => sceneModel.reset() );
    this.selectedSceneModelProperty.reset();

    this.focusedSoccerBallProperty.reset();
    this.isSoccerBallKeyboardGrabbedProperty.reset();
    this.hasKeyboardGrabbedBallProperty.reset();
    this.isKeyboardFocusedProperty.reset();
    this.hasKeyboardSelectedDifferentBallProperty.reset();
    this.hasKeyboardMovedBallProperty.reset();
  }

  public clearData(): void {
    this.focusedSoccerBallProperty.value = null;
    this.selectedSceneModelProperty.value.clearData();
  }
}

soccerCommon.register( 'SoccerModel', SoccerModel );