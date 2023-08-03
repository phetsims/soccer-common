// Copyright 2023, University of Colorado Boulder

/**
 * TODO Describe this class and its responsibilities.
 *
 * @author Marla Schulz
 */

import Screen, { ScreenOptions } from '../../joist/js/Screen.js';
import optionize from '../../phet-core/js/optionize.js';
import SoccerCommonColors from './SoccerCommonColors.js';
import soccerCommon from './soccerCommon.js';
import SoccerCommonModel from './model/SoccerCommonModel.js';
import SoccerCommonScreenView from './view/SoccerCommonScreenView.js';
import SoccerCommonStrings from './SoccerCommonStrings.js';

type SelfOptions = {
  //TODO add options that are specific to SoccerCommonScreen here
};

type SoccerCommonScreenOptions = SelfOptions & ScreenOptions;

export default class SoccerCommonScreen extends Screen<SoccerCommonModel, SoccerCommonScreenView> {

  public constructor( providedOptions: SoccerCommonScreenOptions ) {

    const options = optionize<SoccerCommonScreenOptions, SelfOptions, ScreenOptions>()( {
      name: SoccerCommonStrings.screen.nameStringProperty,

      //TODO add default values for optional SelfOptions here

      //TODO add default values for optional ScreenOptions here
      backgroundColorProperty: SoccerCommonColors.screenBackgroundColorProperty
    }, providedOptions );

    super(
      () => new SoccerCommonModel( { tandem: options.tandem.createTandem( 'model' ) } ),
      model => new SoccerCommonScreenView( model, { tandem: options.tandem.createTandem( 'view' ) } ),
      options
    );
  }
}

soccerCommon.register( 'SoccerCommonScreen', SoccerCommonScreen );