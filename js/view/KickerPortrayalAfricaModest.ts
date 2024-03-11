// Copyright 2023-2024, University of Colorado Boulder

import KickerPortrayal from './KickerPortrayal.js';
import africaModestPlayer03Standing_png from '../../images/africaModest/africaModestPlayer03Standing_png.js';
import africaModestPlayer03PoisedToKick_png from '../../images/africaModest/africaModestPlayer03PoisedToKick_png.js';
import africaModestPlayer03Kicking_png from '../../images/africaModest/africaModestPlayer03Kicking_png.js';
import africaModestPlayer06Standing_png from '../../images/africaModest/africaModestPlayer06Standing_png.js';
import africaModestPlayer06PoisedToKick_png from '../../images/africaModest/africaModestPlayer06PoisedToKick_png.js';
import africaModestPlayer06Kicking_png from '../../images/africaModest/africaModestPlayer06Kicking_png.js';
import KickerPortrayalUSA from './KickerPortrayalUSA.js';
import KickerPortrayalAfrica from './KickerPortrayalAfrica.js';
import africaModestVariabilityPlayer02Standing_png from '../../images/africaModest/africaModestVariabilityPlayer02Standing_png.js';
import africaModestVariabilityPlayer02PoisedToKick_png from '../../images/africaModest/africaModestVariabilityPlayer02PoisedToKick_png.js';
import africaModestVariabilityPlayer02Kicking_png from '../../images/africaModest/africaModestVariabilityPlayer02Kicking_png.js';
import JoistStrings from '../../../joist/js/JoistStrings.js';
import { AFRICA_MODEST_REGION_AND_CULTURE_ID } from '../../../joist/js/preferences/RegionAndCulturePortrayal.js';

/**
 * Artwork representing characters from Africa (modest).
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

const africaModestStringProperty = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaModestStringProperty;

const KickerPortrayalAfricaModest = new KickerPortrayal(
  africaModestStringProperty,

  // Unnumbered Kickers
  [
    KickerPortrayalAfrica.unnumberedKickerImages[ 1 - 1 ],
    KickerPortrayalAfrica.unnumberedKickerImages[ 4 - 1 ],
    {
      standing: africaModestPlayer03Standing_png,
      poisedToKick: africaModestPlayer03PoisedToKick_png,
      kicking: africaModestPlayer03Kicking_png
    },
    KickerPortrayalUSA.unnumberedKickerImages[ 14 - 1 ],

    KickerPortrayalAfrica.unnumberedKickerImages[ 3 - 1 ],
    {
      standing: africaModestPlayer06Standing_png,
      poisedToKick: africaModestPlayer06PoisedToKick_png,
      kicking: africaModestPlayer06Kicking_png
    },
    KickerPortrayalAfrica.unnumberedKickerImages[ 7 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 8 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 2 - 1 ],
    KickerPortrayalAfrica.unnumberedKickerImages[ 11 - 1 ] ],

  // Numbered Kickers
  [
    KickerPortrayalAfrica.numberedKickerImages[ 1 - 1 ],
    {
      standing: africaModestVariabilityPlayer02Standing_png,
      poisedToKick: africaModestVariabilityPlayer02PoisedToKick_png,
      kicking: africaModestVariabilityPlayer02Kicking_png
    },
    KickerPortrayalAfrica.numberedKickerImages[ 3 - 1 ],
    KickerPortrayalAfrica.numberedKickerImages[ 4 - 1 ]
  ],
  AFRICA_MODEST_REGION_AND_CULTURE_ID );

export default KickerPortrayalAfricaModest;
