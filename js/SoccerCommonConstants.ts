// Copyright 2023, University of Colorado Boulder

/**
 * Constants used throughout this repo.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import soccerCommon from './soccerCommon.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import InteractiveCueArrowNode from './view/InteractiveCueArrowNode.js';

const SoccerCommonConstants = {
  GRAVITY: -9.8, // in meters/second^2
  SOCCER_BALL_RADIUS: 0.3, // in meters
  SOCCER_BALL_OVERLAP: 0.01, // as a percentage of the soccer ball diameter
  GROUND_POSITION_Y: 515,
  SOCCER_BALL_VIEW_SIZE: 41,
  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,

  // TODO: move to GroupSortInteractionView.createSortCueNode() https://github.com/phetsims/scenery-phet/issues/815
  CREATE_KEYBOARD_ARROW_NODE: ( visibleProperty: TReadOnlyProperty<boolean>, scale = 1 ): InteractiveCueArrowNode => new InteractiveCueArrowNode( {
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
    }
  )
};

soccerCommon.register( 'SoccerCommonConstants', SoccerCommonConstants );
export default SoccerCommonConstants;