// Copyright 2023-2024, University of Colorado Boulder
/**
 * Parent screenView for sims that use a soccer context. Includes a ModelViewTransform2 and the NumberLineNode
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import ScreenView, { ScreenViewOptions } from '../../../joist/js/ScreenView.js';
import soccerCommon from '../soccerCommon.js';
import optionize from '../../../phet-core/js/optionize.js';
import Bounds2 from '../../../dot/js/Bounds2.js';
import SoccerCommonConstants from '../SoccerCommonConstants.js';
import Range from '../../../dot/js/Range.js';
import ModelViewTransform2 from '../../../phetcommon/js/view/ModelViewTransform2.js';
import SoccerModel from '../model/SoccerModel.js';
import SoccerSceneModel from '../model/SoccerSceneModel.js';
import DynamicProperty from '../../../axon/js/DynamicProperty.js';
import NumberLineNode from './NumberLineNode.js';
import { Image, ManualConstraint, Node } from '../../../scenery/js/imports.js';
import GroupSortInteractionView from '../../../scenery-phet/js/accessibility/group-sort/view/GroupSortInteractionView.js';
import dragIndicatorHand_png from '../../../scenery-phet/images/dragIndicatorHand_png.js';
import Vector2 from '../../../dot/js/Vector2.js';
import { SoccerBallPhase } from '../model/SoccerBallPhase.js';
import WithRequired from '../../../phet-core/js/types/WithRequired.js';

type SelfOptions = {
  physicalRange: Range;
  chartViewWidth: number;
  numberLineXMargin: number;
  groundPositionY?: number;
};

export const DRAG_CUE_SCALE = 0.8;

export type SoccerScreenViewOptions = SelfOptions & WithRequired<ScreenViewOptions, 'tandem'>;

export default class SoccerScreenView<T extends SoccerSceneModel, Q extends SoccerModel<T>> extends ScreenView {

  // The model-view transform for the screen view
  protected readonly modelViewTransform: ModelViewTransform2;

  // The number of soccer balls that have been kicked in the active scene
  protected readonly numberOfKicksProperty: DynamicProperty<number, number, SoccerSceneModel>;

  // The number line in the soccer area at the bottom of the screen
  protected readonly playAreaNumberLineNode: NumberLineNode;

  // The keyboard drag indicator arrow
  protected readonly keyboardSortCueNode: Node;
  protected readonly sortIndicatorArrowNode: Node;
  protected readonly mouseSortHandCueNode: Node;

  protected constructor( protected readonly model: Q, providedOptions: SoccerScreenViewOptions ) {

    const options = optionize<SoccerScreenViewOptions, SelfOptions, ScreenViewOptions>()( {
      isDisposable: false,
      groundPositionY: SoccerCommonConstants.GROUND_POSITION_Y
    }, providedOptions );

    super( options );

    this.numberOfKicksProperty = new DynamicProperty<number, number, SoccerSceneModel>( model.selectedSceneModelProperty, { derive: 'numberOfDataPointsProperty' } );

    const groundPositionY = options.groundPositionY;

    // The ground is at y=0
    this.modelViewTransform = ModelViewTransform2.createRectangleInvertedYMapping(
      new Bounds2( options.physicalRange.min, 0, options.physicalRange.max, 1 ),
      new Bounds2( options.numberLineXMargin, groundPositionY - SoccerCommonConstants.SOCCER_BALL_VIEW_SIZE,
        options.numberLineXMargin + options.chartViewWidth, groundPositionY )
    );

    this.playAreaNumberLineNode = new NumberLineNode(
      options.chartViewWidth,
      options.physicalRange, {
        includeXAxis: false,
        x: options.numberLineXMargin,
        y: groundPositionY,
        tandem: options.tandem?.createTandem( 'playAreaNumberLineNode' ),
        phetioVisiblePropertyInstrumented: true,
        visiblePropertyOptions: {
          phetioFeatured: true
        }
      } );

    /**
     * Create and handle cue nodes.
     */
    this.keyboardSortCueNode = GroupSortInteractionView.createSortCueNode(
      model.groupSortInteractionModel.keyboardSortCueVisibleProperty, DRAG_CUE_SCALE );

    this.sortIndicatorArrowNode = GroupSortInteractionView.createSortCueNode(
      model.groupSortInteractionModel.mouseSortCueVisibleProperty, DRAG_CUE_SCALE );

    this.mouseSortHandCueNode = new Image( dragIndicatorHand_png, {
      scale: 0.07,
      visibleProperty: model.groupSortInteractionModel.mouseSortCueVisibleProperty,
      rotation: Math.PI / 4
    } );

    ManualConstraint.create( this, [ this.sortIndicatorArrowNode ], sortIndicatorArrowNodeProxy => {

      // Pixel adjustments needed with rotation option on mouseSortHandCueNode and empirically determined to match design
      this.mouseSortHandCueNode.right = sortIndicatorArrowNodeProxy.left + 22;
      this.mouseSortHandCueNode.top = sortIndicatorArrowNodeProxy.bottom + Math.abs( this.modelViewTransform.modelToViewDeltaY( SoccerCommonConstants.SOCCER_BALL_RADIUS ) ) - 5;
    } );

    this.visibleBoundsProperty.link( this.updateMouseSortCueNode.bind( this ) );
    this.model.selectedSceneModelProperty.link( this.updateMouseSortCueNode.bind( this ) );
    this.model.sceneModels.forEach( sceneModel => {
      sceneModel.objectChangedEmitter.addListener( this.updateMouseSortCueNode.bind( this ) );
    } );
    model.groupSortInteractionModel.registerUpdateSortCueNode( this.updateMouseSortCueNode.bind( this ) );

    this.addChild( this.keyboardSortCueNode );
  }

  // calculate where the top object is at a given value
  protected getTopObjectPositionY( value: number ): number {
    const sceneModel = this.model.selectedSceneModelProperty.value;
    const ballsAtValue = sceneModel.soccerBalls.filter( soccerBall =>
      soccerBall.valueProperty.value === value && soccerBall.soccerBallPhaseProperty.value === SoccerBallPhase.STACKED );
    const modelHeight = ballsAtValue.length * SoccerCommonConstants.SOCCER_BALL_RADIUS * 2 * ( 1 - SoccerCommonConstants.SOCCER_BALL_OVERLAP );
    const viewHeight = this.modelViewTransform.modelToViewDeltaY( modelHeight );
    return this.modelViewTransform.modelToViewY( 0 ) + viewHeight;
  }

  protected updateMouseSortCueNode(): void {
    const mouseSortCueVisible = this.model.groupSortInteractionModel.mouseSortCueVisibleProperty.value;
    const selectedValue = this.model.groupSortInteractionModel.selectedGroupItemProperty.value?.valueProperty.value ?? null;

    if ( mouseSortCueVisible && selectedValue !== null ) {
      const topObjectPositionY = this.getTopObjectPositionY( selectedValue );
      this.sortIndicatorArrowNode.center = new Vector2(
        this.modelViewTransform.modelToViewX( selectedValue ),

        // This value must be kept in sync with the other occurrences of GroupSortInteractionView.createSortCueNode()
        // that are shown for the keyboard.
        topObjectPositionY - 11.5
      );
    }
  }
}

soccerCommon.register( 'SoccerScreenView', SoccerScreenView );