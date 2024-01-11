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
import { SoccerBallPhase } from '../model/SoccerBallPhase.js';

// A list of options that are required by the supertype, but optional here because
// we provide a default.
type RequiredButProvidedBySubtype = 'getNextFocusedGroupItem' | 'getGroupItemToFocus' | 'getNodeFromModelItem';

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
      },
      getGroupItemToFocus: () => {

        assert && assert( groupSortInteractionModel.focusedGroupItemProperty.value === null,
          'expected to only be called when there is no focus' );

        const topSoccerBalls = sceneModel.getTopSoccerBalls();
        if ( topSoccerBalls.length > 0 ) {
          const sortIndicatorValue = groupSortInteractionModel.sortIndicatorValueProperty.value;
          if ( sortIndicatorValue !== null ) {
            const sortIndicatorStack = sceneModel.getStackAtValue( sortIndicatorValue,
              soccerBall => soccerBall.soccerBallPhaseProperty.value === SoccerBallPhase.STACKED );
            assert && assert( sortIndicatorStack.length > 0, `must have a stack length at the sortIndicator value: ${sortIndicatorValue}` );
            return sortIndicatorStack[ sortIndicatorStack.length - 1 ];
          }
          else {
            return topSoccerBalls[ 0 ];
          }
        }
        return null;
      },
      onSort: soccerBall => {
        assert && assert( soccerBall.valueProperty.value !== null );
        soccerBall.toneEmitter.emit( soccerBall.valueProperty.value! );
      },
      numberKeyMapper: keysPressed => {

        // Note here how "0" maps to 10 based on the location of it next to 9.
        return keysPressed === '1' ? 1 :
               keysPressed === '2' ? 2 :
               keysPressed === '3' ? 3 :
               keysPressed === '4' ? 4 :
               keysPressed === '5' ? 5 :
               keysPressed === '6' ? 6 :
               keysPressed === '7' ? 7 :
               keysPressed === '8' ? 8 :
               keysPressed === '9' ? 9 :
               keysPressed === '0' ? 10 :
               null; // Guard against having an unexpected key (don't change the value).
      }
    }, providedOptions );

    super( groupSortInteractionModel, primaryFocusedNode, options );

    // Position the keyboard cue given the MVT. The selection arrow is shown over the same ball as the mouse sort
    // indicator item
    this.positionKeyboardSortArrowCueNodeEmitter.addListener( () => {
      if ( selectedSceneModelProperty.value === sceneModel ) {

        const focusedSoccerBall = this.groupSortInteractionModel.focusedGroupItemProperty.value;
        const sortIndicatorValue = this.groupSortInteractionModel.sortIndicatorValueProperty.value!;

        assert && assert( sortIndicatorValue !== null, 'no nulls allowed' );

        // If a soccer ball has focus, that takes precedence for displaying the indicators
        const valueToShow = focusedSoccerBall ? focusedSoccerBall.valueProperty.value! : sortIndicatorValue;
        const stack = sceneModel.getStackAtValue( valueToShow );

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

    const focusedGroupItemProperty = this.groupSortInteractionModel.focusedGroupItemProperty;

    // Update soccer ball selection when topmost ball in the stack changes.
    sceneModel.stackChangedEmitter.addListener( () => {
      const focusedGroupItem = focusedGroupItemProperty.value;

      // When a user is focused on the backLayerSoccerBallLayer, but no balls have landed yet, we want to ensure that
      // a focusedSoccerBall gets assigned once the ball lands.
      // TODO: Hard to generalize, perhaps with a hook like "update focus please" https://github.com/phetsims/scenery-phet/issues/815
      const topSoccerBalls = sceneModel.getTopSoccerBalls();
      if ( focusedGroupItem === null && topSoccerBalls.length > 0 && primaryFocusedNode.focused ) {
        focusedGroupItemProperty.value = topSoccerBalls[ 0 ];
      }

      // Anytime a stack changes and the focusedSoccerBall is assigned, we want to make sure the focusedSoccerBall
      // stays on top.
      if ( focusedGroupItem !== null ) {
        assert && assert( focusedGroupItem.valueProperty.value !== null, 'The valueProperty of the focusedSoccerBall should not be null.' );
        const focusedStack = sceneModel.getStackAtValue( focusedGroupItem.valueProperty.value! );
        focusedGroupItemProperty.value = focusedStack[ focusedStack.length - 1 ];
      }
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