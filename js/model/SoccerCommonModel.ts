// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Marla Schulz
 */

import soccerCommon from '../soccerCommon.js';
import { PhetioObjectOptions } from '../../../tandem/js/PhetioObject.js';
import PickRequired from '../../../phet-core/js/types/PickRequired.js';
import TModel from '../../../joist/js/TModel.js';

type SelfOptions = {
  //TODO add options that are specific to SoccerCommonModel here
};

type SoccerCommonModelOptions = SelfOptions & PickRequired<PhetioObjectOptions, 'tandem'>;

export default class SoccerCommonModel implements TModel {

  public constructor( providedOptions: SoccerCommonModelOptions ) {
    //TODO
  }

  /**
   * Resets the model.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the model.
   * @param dt - time step, in seconds
   */
  public step( dt: number ): void {
    //TODO
  }
}

soccerCommon.register( 'SoccerCommonModel', SoccerCommonModel );