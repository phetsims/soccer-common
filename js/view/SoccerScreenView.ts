// Copyright 2023-2024, University of Colorado Boulder
/**
 * Parent screenView for sims that use a soccer context. Includes a ModelViewTransform2 and the NumberLineNode
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import ScreenView, { ScreenViewOptions } from '../../../joist/js/ScreenView.js';
import soccerCommon from '../soccerCommon.js';
import StrictOmit from '../../../phet-core/js/types/StrictOmit.js';
import { QuestionBarOptions } from '../../../scenery-phet/js/QuestionBar.js';
import optionize from '../../../phet-core/js/optionize.js';
import Bounds2 from '../../../dot/js/Bounds2.js';
import SoccerCommonConstants from '../SoccerCommonConstants.js';
import Range from '../../../dot/js/Range.js';
import ModelViewTransform2 from '../../../phetcommon/js/view/ModelViewTransform2.js';
import SoccerModel from '../model/SoccerModel.js';
import SoccerSceneModel from '../model/SoccerSceneModel.js';
import DynamicProperty from '../../../axon/js/DynamicProperty.js';
import NumberLineNode from './NumberLineNode.js';
import { Node } from '../../../scenery/js/imports.js';
import GroupSortInteractionView from '../../../scenery-phet/js/accessibility/group-sort/view/GroupSortInteractionView.js';

type SelfOptions = {
  questionBarOptions: StrictOmit<QuestionBarOptions, 'tandem'>;
  physicalRange: Range;
  chartViewWidth: number;
  numberLineXMargin: number;
};

export const DRAG_CUE_SCALE = 0.8;

export type SoccerScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class SoccerScreenView<T extends SoccerSceneModel, Q extends SoccerModel<T>> extends ScreenView {

  // The model-view transform for the screen view
  protected readonly modelViewTransform: ModelViewTransform2;

  // The number of soccer balls that have been kicked in the active scene
  protected readonly numberOfKicksProperty: DynamicProperty<number, number, SoccerSceneModel>;

  // The number line in the soccer area at the bottom of the screen
  protected readonly playAreaNumberLineNode: NumberLineNode;

  // The keyboard drag indicator arrow
  protected readonly keyboardSortCueNode: Node;

  // Flag to ensure that the grabReleaseCueNode is only added once
  private grabReleaseCueNodeAdded = false;

  protected constructor( protected readonly model: Q, providedOptions: SoccerScreenViewOptions ) {

    const options = optionize<SoccerScreenViewOptions, SelfOptions, ScreenViewOptions>()( {
      isDisposable: false
    }, providedOptions );

    super( options );

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

    this.keyboardSortCueNode = GroupSortInteractionView.createSortCueNode(
      model.groupSortInteractionModel.keyboardSortCueVisibleProperty, DRAG_CUE_SCALE );

    this.addChild( this.keyboardSortCueNode );
  }

  protected addGrabReleaseCue(): void {
    assert && assert( !this.grabReleaseCueNodeAdded, 'grabReleaseCueNode should only be added once' );

    const visibleProperty = this.model.groupSortInteractionModel.grabReleaseCueVisibleProperty;
    this.addChild( GroupSortInteractionView.createGrabReleaseCueNode( visibleProperty, {
      centerTop: this.modelViewTransform.modelToViewXY( 7.5, 4 )
    } ) );

    this.grabReleaseCueNodeAdded = true;
  }
}

soccerCommon.register( 'SoccerScreenView', SoccerScreenView );
