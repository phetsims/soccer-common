// Copyright 2023, University of Colorado Boulder

/**
 * Constants used throughout this repo.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import soccerCommon from './soccerCommon.js';

const SoccerCommonConstants = {
  GRAVITY: -9.8, // in meters/second^2
  SOCCER_BALL_RADIUS: 0.3, // in meters
  SOCCER_BALL_OVERLAP: 0.01 // as a percentage of the soccer ball diameter
};

soccerCommon.register( 'SoccerCommonConstants', SoccerCommonConstants );
export default SoccerCommonConstants;