// Copyright 2023, University of Colorado Boulder

import KickerCharacterSet, { portrayalsTandem } from './KickerCharacterSet.js';
import kicker1_set1_headshot_TEMP_png from '../../images/kicker1_set1_headshot_TEMP_png.js';
import player01Standing_png from '../../images/africaModest/player01Standing_png.js';
import player01PoisedToKick_png from '../../images/africaModest/player01PoisedToKick_png.js';
import player01Kicking_png from '../../images/africaModest/player01Kicking_png.js';
import player02Standing_png from '../../images/africaModest/player02Standing_png.js';
import player02PoisedToKick_png from '../../images/africaModest/player02PoisedToKick_png.js';
import player02Kicking_png from '../../images/africaModest/player02Kicking_png.js';
import KickerCharacterSetUSA from './KickerCharacterSetUSA.js';
import KickerCharacterSetAfrica from './KickerCharacterSetAfrica.js';
import SoccerCommonStrings from '../SoccerCommonStrings.js';

/**
 * Artwork representing characters from Africa (modest).
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

const africaModestStringProperty = SoccerCommonStrings.characterSet.africaModestStringProperty;

const KickerCharacterSetAfricaModest = new KickerCharacterSet(
  kicker1_set1_headshot_TEMP_png,
  africaModestStringProperty,

  // Unnumbered Kickers
  [
    KickerCharacterSetAfrica.unnumberedKickerImages[ 1 - 1 ],
    KickerCharacterSetAfrica.unnumberedKickerImages[ 4 - 1 ],
    {
      standing: player01Standing_png,
      poisedToKick: player01PoisedToKick_png,
      kicking: player01Kicking_png
    },
    KickerCharacterSetUSA.unnumberedKickerImages[ 14 - 1 ],

    KickerCharacterSetAfrica.unnumberedKickerImages[ 3 - 1 ],
    {
      standing: player02Standing_png,
      poisedToKick: player02PoisedToKick_png,
      kicking: player02Kicking_png
    },
    KickerCharacterSetAfrica.unnumberedKickerImages[ 7 - 1 ],
    KickerCharacterSetUSA.unnumberedKickerImages[ 8 - 1 ],
    KickerCharacterSetUSA.unnumberedKickerImages[ 2 - 1 ],
    KickerCharacterSetAfrica.unnumberedKickerImages[ 11 - 1 ] ],

  // Numbered Kickers
  KickerCharacterSetUSA.numberedKickerImages,
  {
    tandem: portrayalsTandem.createTandem( 'kickerPortrayalAfricaModest' ),
    phetioState: false
  }
);

export default KickerCharacterSetAfricaModest;
