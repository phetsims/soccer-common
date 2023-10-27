// Copyright 2023, University of Colorado Boulder

/**
 * Query parameters supported by this repo.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import soccerCommon from './soccerCommon.js';

export const USA_QUERY_VALUE = 'usa';
export const AFRICA_QUERY_VALUE = 'africa';
export const AFRICA_MODEST_QUERY_VALUE = 'africaModest';

const SoccerCommonQueryParameters = QueryStringMachine.getAll( {

  // Sets the soccer ball stacking animation to 20x slower. Used for testing/debugging
  slowStackingAnimation: {
    type: 'flag'
  },

  // Causes all kicked soccer balls to land in the same location (7 meters)
  sameSpot: {
    type: 'flag'
  }
} );

soccerCommon.register( 'SoccerCommonQueryParameters', SoccerCommonQueryParameters );
export default SoccerCommonQueryParameters;