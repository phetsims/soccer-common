// Copyright 2023, University of Colorado Boulder

/**
 * Responsible for all Kicker images. Collects the images into usable classes to support animation, and selecting a
 * different set of kicker characters for localization.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import soccerCommon from '../soccerCommon.js';
import KickerCharacterSetUSA from './KickerCharacterSetUSA.js';
import KickerCharacterSetAfrica from './KickerCharacterSetAfrica.js';
import KickerCharacterSetAfricaModest from './KickerCharacterSetAfricaModest.js';

const KickerCharacterSets = {
  CHARACTER_SETS: [ KickerCharacterSetUSA, KickerCharacterSetAfrica, KickerCharacterSetAfricaModest ],
  CHARACTER_SET_1: KickerCharacterSetUSA,
  CHARACTER_SET_2: KickerCharacterSetAfrica,
  CHARACTER_SET_3: KickerCharacterSetAfricaModest
};

soccerCommon.register( 'KickerCharacterSets', KickerCharacterSets );

export default KickerCharacterSets;