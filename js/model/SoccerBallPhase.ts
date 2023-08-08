// Copyright 2023, University of Colorado Boulder
/**
 * SoccerBallPhase is used to identify what type of animation a SoccerBall is undergoing.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Enumeration from '../../../phet-core/js/Enumeration.js';
import EnumerationValue from '../../../phet-core/js/EnumerationValue.js';
import soccerCommon from '../soccerCommon.js';

export class SoccerBallPhase extends EnumerationValue {
  public static readonly INACTIVE = new SoccerBallPhase();
  public static readonly READY = new SoccerBallPhase();
  public static readonly FLYING = new SoccerBallPhase();
  public static readonly STACKING = new SoccerBallPhase();
  public static readonly STACKED = new SoccerBallPhase();

  public static readonly enumeration = new Enumeration( SoccerBallPhase );
}

soccerCommon.register( 'SoccerBallPhase', SoccerBallPhase );