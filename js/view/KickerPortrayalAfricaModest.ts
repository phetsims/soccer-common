// Copyright 2023-2024, University of Colorado Boulder

import KickerPortrayal from './KickerPortrayal.js';
import africaModestPlayer01Standing_png from '../../images/africaModest/africaModestPlayer01Standing_png.js';
import africaModestPlayer01PoisedToKick_png from '../../images/africaModest/africaModestPlayer01PoisedToKick_png.js';
import africaModestPlayer01Kicking_png from '../../images/africaModest/africaModestPlayer01Kicking_png.js';
import africaModestPlayer02Standing_png from '../../images/africaModest/africaModestPlayer02Standing_png.js';
import africaModestPlayer02PoisedToKick_png from '../../images/africaModest/africaModestPlayer02PoisedToKick_png.js';
import africaModestPlayer02Kicking_png from '../../images/africaModest/africaModestPlayer02Kicking_png.js';
import KickerPortrayalUSA from './KickerPortrayalUSA.js';
import KickerPortrayalAfrica from './KickerPortrayalAfrica.js';
import africaModestVariabilityPlayer01Standing_png from '../../images/africaModest/africaModestVariabilityPlayer01Standing_png.js';
import africaModestVariabilityPlayer01PoisedToKick_png from '../../images/africaModest/africaModestVariabilityPlayer01PoisedToKick_png.js';
import africaModestVariabilityPlayer01Kicking_png from '../../images/africaModest/africaModestVariabilityPlayer01Kicking_png.js';
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
      standing: africaModestPlayer01Standing_png,
      poisedToKick: africaModestPlayer01PoisedToKick_png,
      kicking: africaModestPlayer01Kicking_png
    },
    KickerPortrayalUSA.unnumberedKickerImages[ 14 - 1 ],

    KickerPortrayalAfrica.unnumberedKickerImages[ 3 - 1 ],
    {
      standing: africaModestPlayer02Standing_png,
      poisedToKick: africaModestPlayer02PoisedToKick_png,
      kicking: africaModestPlayer02Kicking_png
    },
    KickerPortrayalAfrica.unnumberedKickerImages[ 7 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 8 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 2 - 1 ],
    KickerPortrayalAfrica.unnumberedKickerImages[ 11 - 1 ] ],

  // Numbered Kickers
  [
    KickerPortrayalAfrica.numberedKickerImages[ 1 - 1 ],
    {
      standing: africaModestVariabilityPlayer01Standing_png,
      poisedToKick: africaModestVariabilityPlayer01PoisedToKick_png,
      kicking: africaModestVariabilityPlayer01Kicking_png
    },
    KickerPortrayalAfrica.numberedKickerImages[ 3 - 1 ],
    KickerPortrayalAfrica.numberedKickerImages[ 4 - 1 ]
  ],
  AFRICA_MODEST_REGION_AND_CULTURE_ID );

export default KickerPortrayalAfricaModest;
