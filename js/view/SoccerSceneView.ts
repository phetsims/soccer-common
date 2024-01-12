// Copyright 2023, University of Colorado Boulder

/**
 * Depicts a single scene in which soccer balls can be kicked. This includes the soccer balls, soccer players,
 * and drag indicator arrow. The scene is rendered in two layers to ensure the correct z-ordering.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import { InteractiveHighlightingNode, Node } from '../../../scenery/js/imports.js';
import SoccerBallNode from './SoccerBallNode.js';
import { SoccerBallPhase } from '../model/SoccerBallPhase.js';
import SoccerSceneModel from '../model/SoccerSceneModel.js';
import KickerNode from './KickerNode.js';
import { KickerImageSet } from './KickerPortrayal.js';
import soccerCommon from '../soccerCommon.js';
import ModelViewTransform2 from '../../../phetcommon/js/view/ModelViewTransform2.js';
import SoccerBall from '../model/SoccerBall.js';
import { Shape } from '../../../kite/js/imports.js';
import Bounds2 from '../../../dot/js/Bounds2.js';
import Kicker from '../model/Kicker.js';
import Range from '../../../dot/js/Range.js';
import Tandem from '../../../tandem/js/Tandem.js';
import SoccerModel from '../model/SoccerModel.js';
import SoccerCommonGroupSortInteractionView from './SoccerCommonGroupSortInteractionView.js';

/**
 * Renders view elements for a SoccerSceneModel. Note that to satisfy the correct z-ordering, elements
 * populate the middleScreenViewLayer and frontScreenViewLayer in the parent.
 */
export default class SoccerSceneView<SceneModel extends SoccerSceneModel = SoccerSceneModel> {

  public readonly backSceneViewLayer: Node;
  public readonly frontSceneViewLayer: Node;
  public readonly groupSortInteractionView: SoccerCommonGroupSortInteractionView<SceneModel>;

  public constructor(
    soccerModel: Pick<SoccerModel<SceneModel>,
      'soccerBallsEnabledProperty' | 'groupSortInteractionModel' | 'selectedSceneModelProperty'>,
    public readonly sceneModel: SceneModel,
    keyboardSortCueNode: Node,
    getKickerImageSet: ( kicker: Kicker, sceneModel: SceneModel ) => KickerImageSet[],
    public readonly modelViewTransform: ModelViewTransform2,
    physicalRange: Range,
    tandem: Tandem ) {

    const soccerBallsEnabledProperty = soccerModel.soccerBallsEnabledProperty;
    const soccerBallMap = new Map<SoccerBall, SoccerBallNode>();

    // Keep soccer balls in one layer, so we can control the focus order.
    const backLayerSoccerBallLayer = new InteractiveHighlightingNode( {
      focusable: true,
      tagName: 'div'
    } );

    this.groupSortInteractionView = new SoccerCommonGroupSortInteractionView<SceneModel>(
      soccerModel.groupSortInteractionModel,
      backLayerSoccerBallLayer,
      sceneModel,
      soccerModel.selectedSceneModelProperty,
      soccerBallMap,
      keyboardSortCueNode,
      modelViewTransform, {
        sortingRange: physicalRange
      }
    );

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
    } );

    const kickerNodes = sceneModel.kickers.map( kicker =>
      new KickerNode(
        kicker,
        getKickerImageSet( kicker, sceneModel ),
        modelViewTransform ) );

    kickerNodes.forEach( kickerNode => frontLayer.addChild( kickerNode ) );

    this.backSceneViewLayer = backLayer;
    this.frontSceneViewLayer = frontLayer;
  }
}

soccerCommon.register( 'SoccerSceneView', SoccerSceneView );