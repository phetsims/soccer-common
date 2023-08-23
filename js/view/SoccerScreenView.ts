// Copyright 2023, University of Colorado Boulder
/**
 * Parent screenView for sims that use a soccer context. Includes a ModelViewTransform
 * that positions balls along the number line, as well as a QuestionBar and NumberLineNode
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import ScreenView, { ScreenViewOptions } from '../../../joist/js/ScreenView.js';
import soccerCommon from '../soccerCommon.js';
import StrictOmit from '../../../phet-core/js/types/StrictOmit.js';
import QuestionBar, { QuestionBarOptions } from '../../../scenery-phet/js/QuestionBar.js';
import optionize, { combineOptions } from '../../../phet-core/js/optionize.js';
import Bounds2 from '../../../dot/js/Bounds2.js';
import SoccerCommonConstants from '../SoccerCommonConstants.js';
import Range from '../../../dot/js/Range.js';
import ModelViewTransform2 from '../../../phetcommon/js/view/ModelViewTransform2.js';
import ResetAllButton from '../../../scenery-phet/js/buttons/ResetAllButton.js';
import SoccerModel from '../model/SoccerModel.js';
import SoccerSceneModel from '../model/SoccerSceneModel.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import DynamicProperty from '../../../axon/js/DynamicProperty.js';
import NumberLineNode from './NumberLineNode.js';
import GrabReleaseCueNode from '../../../scenery-phet/js/accessibility/nodes/GrabReleaseCueNode.js';

type SelfOptions = {
  questionBarOptions: StrictOmit<QuestionBarOptions, 'tandem'>;
  physicalRange: Range;
  chartViewWidth: number;
  numberLineXMargin: number;
};

export type SoccerScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class SoccerScreenView<T extends SoccerSceneModel, Q extends SoccerModel<T>> extends ScreenView {

  protected readonly resetAllButton: ResetAllButton;
  protected readonly modelViewTransform: ModelViewTransform2;
  protected readonly questionBar: QuestionBar;
  protected readonly playAreaNumberLineNode: NumberLineNode;

  protected readonly numberOfKicksProperty: DynamicProperty<number, number, SoccerSceneModel>;

  protected readonly model: Q;

  public constructor( model: Q, providedOptions: SoccerScreenViewOptions ) {

    const options = optionize<SoccerScreenViewOptions, SelfOptions, ScreenViewOptions>()( {
      isDisposable: false
    }, providedOptions );

    super( options );

    this.model = model;

    this.numberOfKicksProperty = new DynamicProperty<number, number, SoccerSceneModel>( model.selectedSceneModelProperty, { derive: 'numberOfDataPointsProperty' } );

    // The ground is at y=0
    this.modelViewTransform = ModelViewTransform2.createRectangleInvertedYMapping(
      new Bounds2( options.physicalRange.min, 0, options.physicalRange.max, 1 ),
      new Bounds2( options.numberLineXMargin, SoccerCommonConstants.GROUND_POSITION_Y - SoccerCommonConstants.SOCCER_BALL_VIEW_SIZE,
        options.numberLineXMargin + options.chartViewWidth, SoccerCommonConstants.GROUND_POSITION_Y )
    );

    this.playAreaNumberLineNode = new NumberLineNode(
      options.chartViewWidth,
      options.physicalRange, {
        includeXAxis: false,
        x: options.numberLineXMargin,
        y: SoccerCommonConstants.GROUND_POSITION_Y
      } );

    this.resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
      },
      right: this.layoutBounds.maxX - SoccerCommonConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - SoccerCommonConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );

    this.questionBar = new QuestionBar( this.layoutBounds, this.visibleBoundsProperty, combineOptions<QuestionBarOptions>( {
      barHeight: 50,
      tandem: options.tandem.createTandem( 'questionBar' ),
      textOptions: {
        font: new PhetFont( {
          weight: 'bold',
          size: '20px'
        } )
      },
      visiblePropertyOptions: {
        phetioFeatured: true
      }
    }, options.questionBarOptions ) );
  }

  protected addGrabReleaseCue(): void {
    const grabReleaseCueNode = new GrabReleaseCueNode( {
      centerTop: this.modelViewTransform.modelToViewXY( 7.5, 5.4 ),
      visibleProperty: this.model.isGrabReleaseVisibleProperty
    } );
    this.addChild( grabReleaseCueNode );
  }
}

soccerCommon.register( 'SoccerScreenView', SoccerScreenView );