// Copyright 2023, University of Colorado Boulder

/**
 * This doc assumes you have read the doc in GroupSortInteractionModel. Read that first as it explains the "group sort
 * interaction" more generally.
 *
 * The view of the "Group Sort Interaction." This type handles adding the controller for selecting, grabbing, and sorting
 * in the interaction for (keyboard). It also handles the individual and group focus highlights.
 *
 * This class can be used per scene, but the model is best used per screen.
 *
 * TODO: Dispose? https://github.com/phetsims/scenery-phet/issues/815
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import { animatedPanZoomSingleton, HighlightFromNode, HighlightPath, KeyboardListener, Node } from '../../../scenery/js/imports.js';
import soccerCommon from '../soccerCommon.js';
import Range from '../../../dot/js/Range.js';
import Multilink from '../../../axon/js/Multilink.js';
import GroupSortInteractionModel, { ItemModelType } from '../model/GroupSortInteractionModel.js';
import Emitter from '../../../axon/js/Emitter.js';
import { Shape } from '../../../kite/js/imports.js';
import optionize from '../../../phet-core/js/optionize.js';
import TReadOnlyProperty from '../../../axon/js/TReadOnlyProperty.js';
import InteractiveCueArrowNode from './InteractiveCueArrowNode.js';


type SelfOptions<ItemModel extends ItemModelType, ItemNode extends Node> = {

  // Given the delta (difference from currentValue to new value), return the corresponding group item model to be active.
  getNextSelectedGroupItem: ( delta: number ) => ItemModel;

  // Called on the focus() event (the start of the interaction), determine the best choice for the item to first select.
  // Only called if selectedGroupItemProperty is null (no selection already).
  getGroupItemToSelect: ( () => ItemModel | null );

  // Given a model item, return the corresponding node. Support 'null' as a way to support multiple scenes. If you
  // return null, it means that the provided itemModel is not associated with this view, and shouldn't be handled.
  getNodeFromModelItem: ( model: ItemModel ) => ItemNode | null;

  // The available range for storing. This is the acceptable range for the ItemModel.valueProperty.
  sortingRange: Range;

  // Called when a group item is sorted. Note that this may not have changed its value.
  onSort?: ( groupItem: ItemModel, oldValue: number ) => void;

  // If provided, listen to the number keys as well. Provide the value that the number key maps to. A direct value,
  // not a delta. If set to null, then number keys will not be listened to for this interaction
  numberKeyMapper?: ( ( pressedKeys: string ) => ( number | null ) ) | null;
};

export type GroupSortInteractionViewOptions<ItemModel extends ItemModelType, ItemNode extends Node> = SelfOptions<ItemModel, ItemNode>;

export default class GroupSortInteractionView<ItemModel extends ItemModelType, ItemNode extends Node> {

  // Update group highlight dynamically by setting the `shape` of this path.
  protected readonly groupFocusHighlightPath: HighlightPath;

  // TODO: use of "keyboard" maybe isn't needed. It is the cue node for this interaction (which is based on keyboard). https://github.com/phetsims/scenery-phet/issues/815
  public readonly positionKeyboardSortArrowCueNodeEmitter = new Emitter();

  public constructor(
    protected readonly groupSortInteractionModel: GroupSortInteractionModel<ItemModel>,
    primaryFocusedNode: Node,
    providedOptions: GroupSortInteractionViewOptions<ItemModel, ItemNode> ) {

    const options = optionize<GroupSortInteractionViewOptions<ItemModel, ItemNode>>()( {
      numberKeyMapper: null,
      onSort: _.noop
    }, providedOptions );

    const selectedGroupItemProperty = this.groupSortInteractionModel.selectedGroupItemProperty;
    const isKeyboardFocusedProperty = this.groupSortInteractionModel.isKeyboardFocusedProperty;
    const isGroupItemKeyboardGrabbedProperty = this.groupSortInteractionModel.isGroupItemKeyboardGrabbedProperty;
    const hasKeyboardGrabbedGroupItemProperty = this.groupSortInteractionModel.hasKeyboardGrabbedGroupItemProperty;
    const sortIndicatorValueProperty = this.groupSortInteractionModel.sortIndicatorValueProperty;

    primaryFocusedNode.addInputListener( {
      focus: () => {

        if ( selectedGroupItemProperty.value === null ) {
          selectedGroupItemProperty.value = options.getGroupItemToSelect();
        }

        // TODO: should this be true even if selectedGroupItemProperty.value is null? https://github.com/phetsims/scenery-phet/issues/815
        isKeyboardFocusedProperty.value = true;

        // When the group receives keyboard focus, make sure that the selected group item is displayed
        if ( selectedGroupItemProperty.value !== null ) {
          const node = options.getNodeFromModelItem( selectedGroupItemProperty.value );
          node && animatedPanZoomSingleton.listener.panToNode( node, true );
        }
      },
      blur: () => {
        isGroupItemKeyboardGrabbedProperty.value = false;
        isKeyboardFocusedProperty.value = false;
      },
      over: () => {
        // TODO: this is awkward. In this situation:
        //     1. tab to populated node, the keyboard grab cue is shown.
        //     2. Move the mouse over a group item, the keyboard grab cue goes away.
        //     3. Press an arrow key to change focus to another in the group, the keyboard grab cue does not show up.
        //        I bet it still thinks that isKeyboardFocusedProperty is false (!!!!)
        //     https://github.com/phetsims/scenery-phet/issues/815
        isKeyboardFocusedProperty.value = false;
      }
    } );

    Multilink.multilink( [
        selectedGroupItemProperty,
        isGroupItemKeyboardGrabbedProperty,
        sortIndicatorValueProperty
      ],
      ( selectedGroupItem, isGroupItemGrabbed, sortIndicatorValue ) => {
        let focusHighlightSet = false;
        if ( selectedGroupItem ) {
          const node = options.getNodeFromModelItem( selectedGroupItem );
          if ( node ) {
            const focusForSelectedGroupItem = new HighlightFromNode( node, { dashed: isGroupItemGrabbed } );

            // If available, set to the focused selection for this scene.
            primaryFocusedNode.setFocusHighlight( focusForSelectedGroupItem );
            focusHighlightSet = true;
          }
        }

        // If not set above, then actively hide it.
        !focusHighlightSet && primaryFocusedNode.setFocusHighlight( 'invisible' );

        if ( sortIndicatorValue !== null ) {
          this.positionKeyboardSortArrowCueNodeEmitter.emit();
        }
      }
    );

    // A KeyboardListener that changes the "sorting" vs "selecting" state of the interaction.
    const grabReleaseKeyboardListener = new KeyboardListener( {
      fireOnHold: true,
      keys: [ 'enter', 'space', 'escape' ],
      callback: ( event, keysPressed ) => {
        if ( selectedGroupItemProperty.value !== null ) {

          // Do the "Grab/release" action to switch to sorting or selecting
          if ( keysPressed === 'enter' || keysPressed === 'space' ) {
            isGroupItemKeyboardGrabbedProperty.toggle();
            hasKeyboardGrabbedGroupItemProperty.value = true;
          }
          else if ( isGroupItemKeyboardGrabbedProperty.value && keysPressed === 'escape' ) {
            isGroupItemKeyboardGrabbedProperty.value = false;
          }
        }
      }
    } );

    // TODO: Should this function live somewhere else? If on the prototype it could be overridden - No, simpler is better.
    //  Consider adding as a static function. See https://github.com/phetsims/scenery-phet/issues/815
    const getDeltaForKey = ( key: string ): number | null => {

      const fullRange = options.sortingRange.getLength();
      return key === 'home' ? -fullRange :
             key === 'end' ? fullRange :

               // TODO: Generalize to the range https://github.com/phetsims/scenery-phet/issues/815
             key === 'pageDown' ? -3 :
             key === 'pageUp' ? 3 :

               // TODO: https://github.com/phetsims/scenery-phet/issues/815 - Instead of hard coding to 1, these
               //    should use keyboardStep options (copy the API from AccessibleValueHandler)
             [ 'arrowLeft', 'a', 'arrowDown', 's' ].includes( key ) ? -1 :
             [ 'arrowRight', 'd', 'arrowUp', 'w' ].includes( key ) ? 1 :
             null;
    };

    // TODO: adding a modifier key means the arrow keys don't work. https://github.com/phetsims/scenery-phet/issues/815
    // TODO: should we add a "shift+arrow keys" for a larger or smaller step size than the default? https://github.com/phetsims/scenery-phet/issues/815
    const keyboardListener = new KeyboardListener( {
      fireOnHold: true,

      // TODO: See https://github.com/phetsims/scenery-phet/issues/815 - Conditionally add teh number keys, based on
      //    option numberKeyMapper,
      keys: [ 'd', 'arrowRight', 'a', 'arrowLeft', 'arrowUp', 'arrowDown', 'w', 's', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'home', 'end', 'pageUp', 'pageDown' ],
      callback: ( event, keysPressed ) => {

        if ( selectedGroupItemProperty.value !== null ) {

          const groupItem = selectedGroupItemProperty.value;
          const oldValue = groupItem.valueProperty.value!;
          assert && assert( oldValue !== null, 'We should have a group item when responding to input?' );

          // Sorting an item
          if ( isGroupItemKeyboardGrabbedProperty.value ) {
            let newValue: number = oldValue;

            // For these keys, the item will move by a particular delta
            if ( [ 'arrowRight', 'arrowLeft', 'a', 'd', 'arrowUp', 'arrowDown', 'w', 's', 'pageDown', 'pageUp', 'home', 'end' ].includes( keysPressed ) ) {

              const delta = getDeltaForKey( keysPressed )!;
              assert && assert( delta !== null );
              newValue = oldValue + delta;
            }
            else if ( options.numberKeyMapper && isSingleDigit( keysPressed ) ) {
              const mappedValue = options.numberKeyMapper( keysPressed );
              if ( mappedValue ) {
                newValue = mappedValue;
              }
            }

            assert && assert( newValue !== null, 'We should have a value for the group item by the end of the listener.' );
            groupItem.valueProperty.value = options.sortingRange.constrainValue( newValue );

            // TODO: fire this even if the value didn't change? Yes likely, for the sound https://github.com/phetsims/scenery-phet/issues/815
            options.onSort( groupItem, oldValue );
            this.groupSortInteractionModel.hasKeyboardSortedGroupItemProperty.value = true;
            this.groupSortInteractionModel.hasGroupItemBeenSortedProperty.value = true;
          }
          else {

            // TODO: DESIGN!!! This changes the behavior because now the WASD, page up/page down keys work
            //   for the selection too - they don't on published version (Note that home and end DO work on published
            //   version for selection), https://github.com/phetsims/scenery-phet/issues/815
            const delta = getDeltaForKey( keysPressed );
            if ( delta !== null ) {
              this.groupSortInteractionModel.hasKeyboardSelectedDifferentGroupItemProperty.value = true;
              selectedGroupItemProperty.value = options.getNextSelectedGroupItem( delta );
            }
          }

          // When using keyboard input, make sure that the selected group item is still displayed by panning to keep it
          // in view. `panToCenter` is false because centering the group item in the screen is too much movement.
          const node = options.getNodeFromModelItem( groupItem );
          node && animatedPanZoomSingleton.listener.panToNode( node, false );
        }
      }
    } );

    const defaultGroupShape = primaryFocusedNode.bounds.isFinite() ? Shape.bounds( primaryFocusedNode.visibleBounds ) : null;

    // Set the outer group focus highlight to surround the entire area where group items are located.
    this.groupFocusHighlightPath = new HighlightPath( defaultGroupShape, {
      outerStroke: HighlightPath.OUTER_LIGHT_GROUP_FOCUS_COLOR,
      innerStroke: HighlightPath.INNER_LIGHT_GROUP_FOCUS_COLOR,
      outerLineWidth: HighlightPath.GROUP_OUTER_LINE_WIDTH,
      innerLineWidth: HighlightPath.GROUP_INNER_LINE_WIDTH
    } );
    primaryFocusedNode.setGroupFocusHighlight( this.groupFocusHighlightPath );
    primaryFocusedNode.addInputListener( keyboardListener );
    primaryFocusedNode.addInputListener( grabReleaseKeyboardListener );
  }

  /**
   * Use InteractiveCueArrowNode to create a Node for the sorting cue.
   */
  public static createSortCueNode( visibleProperty: TReadOnlyProperty<boolean>, scale = 1 ): InteractiveCueArrowNode {
    return new InteractiveCueArrowNode( {
      doubleHead: true,
      dashWidth: 3.5 * scale,
      dashHeight: 2.8 * scale,
      numberOfDashes: 3,
      spacing: 2 * scale,
      triangleNodeOptions: {
        triangleWidth: 12 * scale,
        triangleHeight: 11 * scale
      },
      visibleProperty: visibleProperty
    } );
  }

  /**
   * Creator factory, similar to PhetioObject.create(). This is most useful if you don't need to keep the instance of
   * your GroupSortInteractionView.
   */
  public static create<ItemModel extends ItemModelType, ItemNode extends Node>(
    groupSortInteractionModel: GroupSortInteractionModel<ItemModel>,
    primaryFocusedNode: Node,
    providedOptions: GroupSortInteractionViewOptions<ItemModel, ItemNode> ): GroupSortInteractionView<ItemModel, ItemNode> {

    return new GroupSortInteractionView<ItemModel, ItemNode>( groupSortInteractionModel, primaryFocusedNode, providedOptions );
  }
}

function isSingleDigit( key: string ): boolean { return /^\d$/.test( key );}

soccerCommon.register( 'GroupSortInteractionView', GroupSortInteractionView );