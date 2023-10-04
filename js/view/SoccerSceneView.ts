// Copyright 2023, University of Colorado Boulder

/**
 * Depicts a single scene in which soccer balls can be kicked. This includes the soccer balls, soccer players,
 * and drag indicator arrow. The scene is rendered in two layers to ensure the correct z-ordering.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import { animatedPanZoomSingleton, HighlightFromNode, HighlightPath, InteractiveHighlightingNode, KeyboardListener, Node } from '../../../scenery/js/imports.js';
import SoccerBallNode from './SoccerBallNode.js';
import { SoccerBallPhase } from '../model/SoccerBallPhase.js';
import SoccerSceneModel from '../model/SoccerSceneModel.js';
import KickerNode from './KickerNode.js';
import { KickerImageSet } from './KickerCharacterSet.js';
import soccerCommon from '../soccerCommon.js';
import ModelViewTransform2 from '../../../phetcommon/js/view/ModelViewTransform2.js';
import SoccerBall from '../model/SoccerBall.js';
import { Shape } from '../../../kite/js/imports.js';
import Bounds2 from '../../../dot/js/Bounds2.js';
import Kicker from '../model/Kicker.js';
import Range from '../../../dot/js/Range.js';
import Utils from '../../../dot/js/Utils.js';
import Multilink from '../../../axon/js/Multilink.js';
import Matrix3 from '../../../dot/js/Matrix3.js';
import Tandem from '../../../tandem/js/Tandem.js';
import SoccerModel from '../model/SoccerModel.js';
import TProperty from '../../../axon/js/TProperty.js';
import TReadOnlyProperty from '../../../axon/js/TReadOnlyProperty.js';

/**
 * Renders view elements for a SoccerSceneModel. Note that to satisfy the correct z-ordering, elements
 * populate the middleScreenViewLayer and frontScreenViewLayer in the parent.
 */
export default class SoccerSceneView {

  public readonly backSceneViewLayer: Node;
  public readonly frontSceneViewLayer: Node;
  private readonly focusHighlightPath: HighlightPath;

  public constructor(
    soccerModel: Pick<SoccerModel<SoccerSceneModel>,
      'soccerBallsEnabledProperty' | 'focusedSoccerBallProperty' | 'isKeyboardFocusedProperty' |
      'isSoccerBallKeyboardGrabbedProperty' | 'hasKeyboardGrabbedBallProperty' | 'hasKeyboardMovedBallProperty' |
      'hasKeyboardSelectedDifferentBallProperty'>,
    public readonly sceneModel: SoccerSceneModel,
    keyboardDragArrowNode: Node,
    soccerBallHasBeenDraggedProperty: TProperty<boolean>,
    dragIndicatorValueProperty: TReadOnlyProperty<number | null>,
    getKickerImageSet: ( kicker: Kicker, sceneModel: SoccerSceneModel ) => KickerImageSet[],
    public readonly modelViewTransform: ModelViewTransform2,
    physicalRange: Range,
    tandem: Tandem ) {

    const soccerBallsEnabledProperty = soccerModel.soccerBallsEnabledProperty;
    const focusedSoccerBallProperty = soccerModel.focusedSoccerBallProperty;
    const hasKeyboardFocusProperty = soccerModel.isKeyboardFocusedProperty;
    const isSoccerBallKeyboardGrabbedProperty = soccerModel.isSoccerBallKeyboardGrabbedProperty;
    const hasKeyboardGrabbedBallProperty = soccerModel.hasKeyboardGrabbedBallProperty;

    const soccerBallMap = new Map<SoccerBall, SoccerBallNode>();

    // Keep soccer balls in one layer, so we can control the focus order.
    const backLayerSoccerBallLayer = new InteractiveHighlightingNode( {
      focusable: true,
      tagName: 'div'
    } );

    const backLayer = new Node( {
      children: [ backLayerSoccerBallLayer ]
    } );

    // A front layer for balls in the air so that they are in front of other UI components
    const frontLayer = new Node();

    sceneModel.soccerBalls.map( ( soccerBall, index ) => {
      const soccerBallNode = new SoccerBallNode(
        soccerBall,
        modelViewTransform,
        soccerBallsEnabledProperty, {
          tandem: tandem.createTandem( 'soccerBallNodes' ).createTandem1Indexed( 'soccerBallNode', index ),
          pickable: false
        } );

      backLayerSoccerBallLayer.addChild( soccerBallNode );

      // While flying, it should be in front in z-order, to be in front of the accordion box
      soccerBall.soccerBallPhaseProperty.lazyLink( ( soccerBallPhase, oldSoccerBallPhase ) => {

        //when the ball is kicked
        if ( soccerBallPhase === SoccerBallPhase.FLYING ) {
          backLayerSoccerBallLayer.removeChild( soccerBallNode );
          frontLayer.addChild( soccerBallNode );
        }
        else if ( oldSoccerBallPhase === SoccerBallPhase.FLYING ) {
          frontLayer.removeChild( soccerBallNode );
          backLayerSoccerBallLayer.addChild( soccerBallNode );
        }
      } );

      soccerBall.valueProperty.link( ( value, oldValue ) => {

        // If the value changed from numeric to numeric, it must have been by user dragging it.
        // It's simpler to have the listener here because in the model or drag listener, there is rounding/snapping
        // And we only want to hide the indicator of the user dragged the ball a full tick mark
        if ( value !== null && oldValue !== null ) {
          soccerBallHasBeenDraggedProperty.value = true;
        }
      } );

      soccerBallMap.set( soccerBall, soccerBallNode );

      return soccerBallNode;
    } );

    // Update pointer areas and soccer ball focus (for keyboard and interactive highlight) when topmost ball changes
    sceneModel.stackChangedEmitter.addListener( stack => {

      let bounds: Bounds2 | null = null;

      for ( let i = 0; i < stack.length; i++ ) {
        const soccerBallNode = soccerBallMap.get( stack[ i ] )!;

        if ( i === 0 ) {
          bounds = soccerBallNode.globalBounds;
        }
        else {
          bounds!.includeBounds( soccerBallNode.globalBounds );
        }

        if ( i === stack.length - 1 ) {
          const pointerArea = Shape.bounds( soccerBallNode.globalToLocalBounds( bounds!.dilated( 5 ) ) );
          soccerBallNode.mouseArea = pointerArea;
          soccerBallNode.touchArea = pointerArea;
          soccerBallNode.pickable = true;
        }
        else {
          soccerBallNode.pickable = false;

          // To make it easier to see when using ?showPointerAreas
          soccerBallNode.mouseArea = Shape.rectangle( 0, 0, 0, 0 );
          soccerBallNode.touchArea = Shape.rectangle( 0, 0, 0, 0 );
        }
      }

      // When a user is focused on the backLayerSoccerBallLayer, but no balls have landed yet, we want to ensure that
      // a focusedSoccerBall gets assigned once the ball lands.
      const topSoccerBalls = sceneModel.getTopSoccerBalls();
      if ( focusedSoccerBallProperty.value === null && topSoccerBalls.length > 0 && backLayerSoccerBallLayer.focused ) {
        focusedSoccerBallProperty.value = topSoccerBalls[ 0 ];
      }

      // Anytime a stack changes and the focusedSoccerBall is assigned, we want to make sure the focusedSoccerBall
      // stays on top.
      if ( focusedSoccerBallProperty.value !== null ) {
        assert && assert( focusedSoccerBallProperty.value.valueProperty.value !== null, 'The valueProperty of the focusedSoccerBall should not be null.' );
        const focusedStack = sceneModel.getStackAtValue( focusedSoccerBallProperty.value.valueProperty.value! );
        focusedSoccerBallProperty.value = focusedStack[ focusedStack.length - 1 ];
      }
    } );

    backLayerSoccerBallLayer.addInputListener( {
      focus: () => {
        const topSoccerBalls = sceneModel.getTopSoccerBalls();
        if ( focusedSoccerBallProperty.value === null && topSoccerBalls.length > 0 ) {
          if ( dragIndicatorValueProperty.value !== null ) {
            const dragIndicatorStack = sceneModel.getStackAtValue( dragIndicatorValueProperty.value,
              ( soccerBall: SoccerBall ) => soccerBall.soccerBallPhaseProperty.value === SoccerBallPhase.STACKED );
            focusedSoccerBallProperty.value = dragIndicatorStack[ dragIndicatorStack.length - 1 ];
          }
          else {
            focusedSoccerBallProperty.value = topSoccerBalls[ 0 ];
          }

        }
        hasKeyboardFocusProperty.value = true;

        // When the group receives keyboard focus, make sure that the focused ball is displayed
        if ( focusedSoccerBallProperty.value !== null ) {
          animatedPanZoomSingleton.listener.panToNode( soccerBallMap.get( focusedSoccerBallProperty.value )!, true );
        }
      },
      blur: () => {
        isSoccerBallKeyboardGrabbedProperty.value = false;
        hasKeyboardFocusProperty.value = false;
      },
      over: () => {
        hasKeyboardFocusProperty.value = false;
      }
    } );

    const kickerNodes = sceneModel.kickers.map( kicker =>
      new KickerNode(
        kicker,
        getKickerImageSet( kicker, sceneModel ),
        modelViewTransform ) );

    kickerNodes.forEach( kickerNode => frontLayer.addChild( kickerNode ) );

    Multilink.multilink( [ focusedSoccerBallProperty, isSoccerBallKeyboardGrabbedProperty, dragIndicatorValueProperty ],
      ( focusedSoccerBall, isSoccerBallGrabbed, dragIndicatorValue ) => {
        if ( focusedSoccerBall ) {

          const focusForSelectedBall = new HighlightFromNode( soccerBallMap.get( focusedSoccerBall )!, { dashed: isSoccerBallGrabbed } );
          backLayerSoccerBallLayer.setFocusHighlight( focusForSelectedBall );
        }
        else {
          backLayerSoccerBallLayer.setFocusHighlight( 'invisible' );
        }

        // The selection arrow is shown over the same ball as the mouse drag indicator ball
        if ( dragIndicatorValue !== null ) {

          // If a soccer ball has focus, that takes precedence for displaying the indicators
          const valueToShow = focusedSoccerBall ? focusedSoccerBall.valueProperty.value! : dragIndicatorValue;
          const stack = this.sceneModel.getStackAtValue( valueToShow );

          if ( stack.length > 0 ) {

            const arrowOffset = -18;

            const topBall = stack[ stack.length - 1 ];
            const position = topBall.positionProperty.value;

            keyboardDragArrowNode.centerBottom = modelViewTransform.modelToViewPosition( position ).plusXY( 0, arrowOffset );
            keyboardDragArrowNode.moveToFront();
          }
        }
      }
    );

    const keyboardListener = new KeyboardListener( {
      fireOnHold: true,
      keys: [ 'd', 'arrowRight', 'a', 'arrowLeft', 'arrowUp', 'arrowDown', 'w', 's', 'enter', 'space', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'home', 'end', 'escape', 'pageUp', 'pageDown' ],
      callback: ( event, keysPressed ) => {
        const topBallNodes = sceneModel.getTopSoccerBalls().map( soccerBall => soccerBallMap.get( soccerBall )! );

        // Select a soccer ball
        if ( focusedSoccerBallProperty.value !== null ) {
          if ( ( [ 'arrowRight', 'arrowLeft', 'a', 'd', 'arrowUp', 'arrowDown', 'w', 's' ].includes( keysPressed ) ) ) {
            if ( [ 'arrowRight', 'arrowLeft', 'arrowUp', 'arrowDown' ].includes( keysPressed ) && !isSoccerBallKeyboardGrabbedProperty.value ) {
              soccerModel.hasKeyboardSelectedDifferentBallProperty.value = true;

              const delta = [ 'arrowRight', 'arrowUp' ].includes( keysPressed ) ? 1 : -1;
              const numberOfTopSoccerBalls = sceneModel.getTopSoccerBalls().length;

              // We are deciding not to wrap the value around the ends of the range because the grabbed soccer ball
              // also does not wrap.
              const currentIndex = topBallNodes.indexOf( soccerBallMap.get( focusedSoccerBallProperty.value )! );
              const nextIndex = Utils.clamp( currentIndex + delta, 0, numberOfTopSoccerBalls - 1 );
              focusedSoccerBallProperty.value = topBallNodes[ nextIndex ].soccerBall;
            }
            else if ( isSoccerBallKeyboardGrabbedProperty.value ) {
              soccerModel.hasKeyboardMovedBallProperty.value = true;

              const delta = [ 'arrowLeft', 'a', 'arrowDown', 's' ].includes( keysPressed ) ? -1 : 1;
              const soccerBall = focusedSoccerBallProperty.value;
              soccerBall.valueProperty.value = physicalRange.constrainValue( soccerBall.valueProperty.value! + delta );
              soccerBall.toneEmitter.emit( soccerBall.valueProperty.value );
            }
          }
          else if ( keysPressed === 'enter' || keysPressed === 'space' ) {
            isSoccerBallKeyboardGrabbedProperty.value = !isSoccerBallKeyboardGrabbedProperty.value;
            hasKeyboardGrabbedBallProperty.value = true;
          }
          else if ( isSoccerBallKeyboardGrabbedProperty.value ) {

            if ( keysPressed === 'escape' ) {
              isSoccerBallKeyboardGrabbedProperty.value = false;
            }
            else {
              const soccerBall = focusedSoccerBallProperty.value;
              soccerBall.valueProperty.value = keysPressed === 'home' ? physicalRange.min :
                                               keysPressed === 'end' ? physicalRange.max :
                                               keysPressed === '1' ? 1 :
                                               keysPressed === '2' ? 2 :
                                               keysPressed === '3' ? 3 :
                                               keysPressed === '4' ? 4 :
                                               keysPressed === '5' ? 5 :
                                               keysPressed === '6' ? 6 :
                                               keysPressed === '7' ? 7 :
                                               keysPressed === '8' ? 8 :
                                               keysPressed === '9' ? 9 :
                                               keysPressed === '0' ? 10 :
                                               keysPressed === 'pageDown' ? Math.max( soccerBall.valueProperty.value! - 3, physicalRange.min ) :
                                               keysPressed === 'pageUp' ? Math.min( soccerBall.valueProperty.value! + 3, physicalRange.max ) :
                                               soccerBall.valueProperty.value;
              if ( typeof soccerBall.valueProperty.value === 'number' ) {
                soccerBall.toneEmitter.emit( soccerBall.valueProperty.value );
                soccerModel.hasKeyboardMovedBallProperty.value = true;
              }
            }
          }

          // When using keyboard input, make sure that the "focused" ball is still displayed by panning to keep it
          // in view. `panToCenter` is false because centering the ball in the screen is too much movement.
          animatedPanZoomSingleton.listener.panToNode( soccerBallMap.get( focusedSoccerBallProperty.value )!, false );
        }
      }
    } );

    // Set the outer group focus region to cover the entire area where soccer balls may land, translate lower so it also includes the number line and labels
    this.focusHighlightPath = new HighlightPath( null, {
      outerStroke: HighlightPath.OUTER_LIGHT_GROUP_FOCUS_COLOR,
      innerStroke: HighlightPath.INNER_LIGHT_GROUP_FOCUS_COLOR,
      outerLineWidth: HighlightPath.GROUP_OUTER_LINE_WIDTH,
      innerLineWidth: HighlightPath.GROUP_INNER_LINE_WIDTH
    } );
    backLayerSoccerBallLayer.setGroupFocusHighlight( this.focusHighlightPath );
    backLayerSoccerBallLayer.addInputListener( keyboardListener );

    this.backSceneViewLayer = backLayer;
    this.frontSceneViewLayer = frontLayer;
  }

  /**
   * The group focus region for the soccer ball area is supposed to be just below the accordion box, and adjust when the
   * accordion box expands and collapses.
   */
  public setGroupFocusHighlightTop( top: number ): void {
    const margin = 4; // Distance below the accordion box
    const shapeForLeftRightBottom = this.modelViewTransform.modelToViewShape( Shape.rect( 0.5, 0, 15, 6 ) ).transformed( Matrix3.translation( 0, 37 ) );
    this.focusHighlightPath.shape = Shape.rect(
      shapeForLeftRightBottom.bounds.x,
      top + margin,
      shapeForLeftRightBottom.bounds.width,
      shapeForLeftRightBottom.bounds.bottom - top - margin
    );
  }
}

soccerCommon.register( 'SoccerSceneView', SoccerSceneView );