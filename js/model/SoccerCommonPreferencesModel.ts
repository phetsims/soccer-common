// Copyright 2023, University of Colorado Boulder

/**
 * Model for handling preferences selected via query parameters or the preferences menu
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import regionAndCultureManager from '../../../joist/js/preferences/regionAndCultureManager.js';
import Property from '../../../axon/js/Property.js';
import CharacterSet from '../../../joist/js/preferences/CharacterSet.js';
import soccerCommon from '../soccerCommon.js';


export default class SoccerCommonPreferencesModel {

  public readonly kickerCharacterSetProperty: Property<CharacterSet | null>;

  public constructor() {

    // Controls the selected SkaterImages.SkaterCharacterSet. A set of characters is selected from Preferences
    // and the actual skater character is chosen from in-screen UI.
    this.kickerCharacterSetProperty = regionAndCultureManager.regionAndCultureProperty;
  }
}

soccerCommon.register( 'SoccerCommonPreferencesModel', SoccerCommonPreferencesModel );