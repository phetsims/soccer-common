// Copyright 2023, University of Colorado Boulder

/**
 * Model for handling preferences selected via query parameters or the preferences menu
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import regionAndCultureManager from '../../../joist/js/preferences/regionAndCultureManager.js';
import Property from '../../../axon/js/Property.js';
import RegionAndCulturePortrayal from '../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import soccerCommon from '../soccerCommon.js';
import Tandem from '../../../tandem/js/Tandem.js';

export const portrayalsTandem = Tandem.PREFERENCES.createTandem( 'regionAndCulturePortrayals' );

export default class SoccerCommonPreferencesModel {

  public readonly kickerCharacterSetProperty: Property<RegionAndCulturePortrayal | null>;

  public constructor() {

    // Controls the selected SkaterImages.SkaterCharacterSet. A set of characters is selected from Preferences
    // and the actual soccer character is chosen from in-screen UI.
    this.kickerCharacterSetProperty = regionAndCultureManager.regionAndCulturePortrayalProperty;
  }
}

soccerCommon.register( 'SoccerCommonPreferencesModel', SoccerCommonPreferencesModel );