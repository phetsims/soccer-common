// Copyright 2023, University of Colorado Boulder

/**
 * TODO: https://github.com/phetsims/scenery-phet/issues/815
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import GroupSortInteractionView, { GroupSortInteractionViewOptions } from './GroupSortInteractionView.js';
import SoccerBall from '../model/SoccerBall.js';
import SoccerBallNode from './SoccerBallNode.js';
import { Shape } from '../../../kite/js/imports.js';
import Matrix3 from '../../../dot/js/Matrix3.js';
import GroupSortInteractionModel from '../model/GroupSortInteractionModel.js';
import { Node } from '../../../scenery/js/imports.js';
import ModelViewTransform2 from '../../../phetcommon/js/view/ModelViewTransform2.js';
import SoccerSceneModel from '../model/SoccerSceneModel.js';
import TReadOnlyProperty from '../../../axon/js/TReadOnlyProperty.js';
import Utils from '../../../dot/js/Utils.js';
import optionize from '../../../phet-core/js/optionize.js';
import PickOptional from '../../../phet-core/js/types/PickOptional.js';
import StrictOmit from '../../../phet-core/js/types/StrictOmit.js';

// A list of options that are required by the supertype, but optional here because
// we provide a default.
type RequiredButProvidedBySubtype = 'getNextFocusedGroupItem' | 'getNodeFromModelItem';

type SelfOptions = PickOptional<GroupSortInteractionViewOptions<SoccerBall, SoccerBallNode>, RequiredButProvidedBySubtype>;

type ParentOptions = StrictOmit<GroupSortInteractionViewOptions<SoccerBall, SoccerBallNode>, RequiredButProvidedBySubtype>;
type SoccerCommonGroupSortInteractionViewOptions = SelfOptions & ParentOptions;
export default class SoccerCommonGroupSortInteractionView extends GroupSortInteractionView<SoccerBall, SoccerBallNode> {

  public constructor(
    groupSortInteractionModel: GroupSortInteractionModel<SoccerBall>,
    primaryFocusedNode: Node,
    sceneModel: SoccerSceneModel,
    selectedSceneModelProperty: TReadOnlyProperty<SoccerSceneModel>,
    soccerBallMap: Map<SoccerBall, SoccerBallNode>,
    keyboardSortArrowCueNode: Node,
    public readonly modelViewTransform: ModelViewTransform2, providedOptions: SoccerCommonGroupSortInteractionViewOptions ) {

    const options = optionize<SoccerCommonGroupSortInteractionViewOptions, SelfOptions, ParentOptions>()( {
      getNodeFromModelItem: model => {
        assert && assert( soccerBallMap.has( model ), 'unexpected model' );
        return soccerBallMap.get( model )!;
      },
      getNextFocusedGroupItem: delta => {
        const focusedSoccerBall = groupSortInteractionModel.focusedGroupItemProperty.value;
        assert && assert( focusedSoccerBall, 'must not be null' );
        const topBallNodes = sceneModel.getTopSoccerBalls().map( soccerBall => soccerBallMap.get( soccerBall )! );
        const numberOfTopSoccerBalls = topBallNodes.length;

        // We are deciding not to wrap the value around the ends of the range because the grabbed soccer ball
        // also does not wrap.
        const currentIndex = topBallNodes.indexOf( soccerBallMap.get( focusedSoccerBall! )! );
        const nextIndex = Utils.clamp( currentIndex + delta, 0, numberOfTopSoccerBalls - 1 );
        return topBallNodes[ nextIndex ].soccerBall;
      }
    }, providedOptions );

    super( groupSortInteractionModel,
      primaryFocusedNode,
      sceneModel,
      options );

    // Position the keyboard cue given the MVT. The selection arrow is shown over the same ball as the mouse sort
    // indicator item
    this.positionKeyboardSortArrowCueNodeEmitter.addListener( () => {
      if ( selectedSceneModelProperty.value === this.sceneModel ) {

        const focusedSoccerBall = this.groupSortInteractionModel.focusedGroupItemProperty.value;
        const sortIndicatorValue = this.groupSortInteractionModel.sortIndicatorValueProperty.value!;

        assert && assert( sortIndicatorValue !== null, 'no nulls allowed' );

        // If a soccer ball has focus, that takes precedence for displaying the indicators
        const valueToShow = focusedSoccerBall ? focusedSoccerBall.valueProperty.value! : sortIndicatorValue;
        const stack = this.sceneModel.getStackAtValue( valueToShow );

        if ( stack.length > 0 ) {

          const arrowOffset = -18;

          const topBall = stack[ stack.length - 1 ];
          const position = topBall.positionProperty.value;
          keyboardSortArrowCueNode.centerBottom = modelViewTransform.modelToViewPosition( position ).plusXY( 0, arrowOffset );
          keyboardSortArrowCueNode.moveToFront();
        }
      }
    } );

    sceneModel.soccerBalls.forEach( soccerBall => {
      soccerBall.valueProperty.link( ( value, oldValue ) => {

        // If the value changed from numeric to numeric, it must have been by user dragging it.
        // It's simpler to have the listener here because in the model or drag listener, there is rounding/snapping
        // And we only want to hide the indicator of the user dragged the ball a full tick mark
        if ( value !== null && oldValue !== null ) {
          this.groupSortInteractionModel.hasGroupItemBeenSortedProperty.value = true;
        }
      } );
    } );

  }

  /**
   * The group focus region for the soccer ball area is supposed to be just below the accordion box, and adjust when the
   * accordion box expands and collapses. Translate lower so it also includes the number line and labels
   */
  public setGroupFocusHighlightTop( top: number ): void {
    const margin = 4; // Distance below the accordion box
    const shapeForLeftRightBottom = this.modelViewTransform.modelToViewShape( Shape.rect( 0.5, 0, 15, 6 ) )
      .transformed( Matrix3.translation( 0, 37 ) );
    this.groupFocusHighlightPath.shape = Shape.rect(
      shapeForLeftRightBottom.bounds.x,
      top + margin,
      shapeForLeftRightBottom.bounds.width,
      shapeForLeftRightBottom.bounds.bottom - top - margin
    );
  }

}

soccerCommon.register( 'SoccerCommonGroupSortInteractionView', SoccerCommonGroupSortInteractionView );