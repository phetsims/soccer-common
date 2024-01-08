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
import GroupSortInteractionModel, { GroupSortInteractionModelOptions } from './GroupSortInteractionModel.js';

type SelfOptions = {
  groupSortInteractionModelOptions?: GroupSortInteractionModelOptions;
};
type SoccerModelOptions = SelfOptions & PhetioObjectOptions;
export default class SoccerModel<T extends SoccerSceneModel> extends PhetioObject {

  // The scene model that is currently active
  public readonly selectedSceneModelProperty: Property<T>;

  // Whether input is enabled for the entire set of soccer balls
  public readonly soccerBallsEnabledProperty: Property<boolean>;

  // The tandem used for the soccer field area
  protected readonly soccerAreaTandem: Tandem;

  // The number of stacked soccer balls in the currently active scene
  protected readonly selectedSceneStackedSoccerBallCountProperty: DynamicProperty<number, number, SoccerSceneModel>;

  // The maximum number of kicks in the currently active scene
  protected readonly selectedSceneMaxKicksProperty: DynamicProperty<number, number, SoccerSceneModel>;

  public readonly groupSortInteractionModel: GroupSortInteractionModel;

  protected constructor( public readonly sceneModels: T[], providedOptions: SoccerModelOptions ) {
    const options = optionize<SoccerModelOptions, SelfOptions, PhetioObjectOptions>()( {
      isDisposable: false,
      groupSortInteractionModelOptions: {}
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

    this.soccerBallsEnabledProperty = new EnabledProperty( true, {
      tandem: this.soccerAreaTandem.createTandem( 'soccerBallsEnabledProperty' ),
      phetioDocumentation: 'Enable or disable input on the entire set of soccer balls.',
      phetioFeatured: true,
      checkTandemName: false
    } );

    this.groupSortInteractionModel = new GroupSortInteractionModel( this.soccerBallsEnabledProperty, options.groupSortInteractionModelOptions );

    this.selectedSceneModelProperty.link( selectedScene => {
      this.sceneModels.forEach( sceneModel => {
        sceneModel.isVisibleProperty.value = sceneModel === selectedScene;
      } );

      this.groupSortInteractionModel.focusResetEmitter.emit();
    } );

    // These DynamicProperties allow us to track all the necessary scenes Properties for dragIndicator update, and not
    // just the first selectedScene
    this.selectedSceneStackedSoccerBallCountProperty = new DynamicProperty<number, number, SoccerSceneModel>( this.selectedSceneModelProperty, {
      derive: 'numberOfDataPointsProperty'
    } );
    this.selectedSceneMaxKicksProperty = new DynamicProperty<number, number, SoccerSceneModel>( this.selectedSceneModelProperty, {
      derive: 'maxKicksProperty'
    } );
  }

  public step( dt: number ): void {
    // Override in subclasses

    this.selectedSceneModelProperty.value.step( dt );
  }

  public reset(): void {

    // We need to reset keyboard focus Properties that are used by the sceneModels, before
    // resetting the sceneModels themselves.
    this.groupSortInteractionModel.reset();

    this.sceneModels.forEach( sceneModel => sceneModel.reset() );
    this.selectedSceneModelProperty.reset();
  }

  public clearData(): void {
    this.groupSortInteractionModel.clearData();
    this.selectedSceneModelProperty.value.clearData();
  }
}

soccerCommon.register( 'SoccerModel', SoccerModel );
