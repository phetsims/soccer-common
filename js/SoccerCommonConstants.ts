// Copyright 2023, University of Colorado Boulder

/**
 * Constants used throughout this repo.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import soccerCommon from './soccerCommon.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import InteractiveCueArrowNode from '../../center-and-variability/js/common/view/InteractiveCueArrowNode.js';

const SoccerCommonConstants = {
  GRAVITY: -9.8, // in meters/second^2
  SOCCER_BALL_RADIUS: 0.3, // in meters
  SOCCER_BALL_OVERLAP: 0.01, // as a percentage of the soccer ball diameter
  GROUND_POSITION_Y: 515,
  SOCCER_BALL_VIEW_SIZE: 41,
  SCREEN_VIEW_X_MARGIN: 15,
  SCREEN_VIEW_Y_MARGIN: 15,

  CREATE_KEYBOARD_ARROW_NODE: ( visibleProperty: TReadOnlyProperty<boolean> ): InteractiveCueArrowNode => new InteractiveCueArrowNode( {
      doubleHead: true,
      dashWidth: 3.5,
      dashHeight: 2.8,
      numberOfDashes: 2,
      spacing: 2,
      triangleNodeOptions: {
        triangleWidth: 12,
        triangleHeight: 11
      },
      visibleProperty: visibleProperty
    }
  )
};

soccerCommon.register( 'SoccerCommonConstants', SoccerCommonConstants );
export default SoccerCommonConstants;