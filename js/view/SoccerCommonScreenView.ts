// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Marla Schulz
 */

import ScreenView, { ScreenViewOptions } from '../../../joist/js/ScreenView.js';
import ResetAllButton from '../../../scenery-phet/js/buttons/ResetAllButton.js';
import SoccerCommonConstants from '../SoccerCommonConstants.js';
import soccerCommon from '../soccerCommon.js';
import SoccerCommonModel from '../model/SoccerCommonModel.js';
import optionize from '../../../phet-core/js/optionize.js';

type SelfOptions = {
 //TODO add options that are specific to SoccerCommonScreenView here
};

type SoccerCommonScreenViewOptions = SelfOptions & ScreenViewOptions;

export default class SoccerCommonScreenView extends ScreenView {

  public constructor( model: SoccerCommonModel, providedOptions: SoccerCommonScreenViewOptions ) {

    const options = optionize<SoccerCommonScreenViewOptions, SelfOptions, ScreenViewOptions>()( {

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenViewOptions here
    }, providedOptions );

    super( options );

    const resetAllButton = new ResetAllButton( {
      listener: () => {
        this.interruptSubtreeInput(); // cancel interactions that may be in progress
        model.reset();
        this.reset();
      },
      right: this.layoutBounds.maxX - SoccerCommonConstants.SCREEN_VIEW_X_MARGIN,
      bottom: this.layoutBounds.maxY - SoccerCommonConstants.SCREEN_VIEW_Y_MARGIN,
      tandem: options.tandem.createTandem( 'resetAllButton' )
    } );
    this.addChild( resetAllButton );
  }

  /**
   * Resets the view.
   */
  public reset(): void {
    //TODO
  }

  /**
   * Steps the view.
   * @param dt - time step, in seconds
   */
  public override step( dt: number ): void {
    //TODO
  }
}

soccerCommon.register( 'SoccerCommonScreenView', SoccerCommonScreenView );