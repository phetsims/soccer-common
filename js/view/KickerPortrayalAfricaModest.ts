// Copyright 2023, University of Colorado Boulder

import KickerPortrayal from './KickerPortrayal.js';
import player01Standing_png from '../../images/africaModest/player01Standing_png.js';
import player01PoisedToKick_png from '../../images/africaModest/player01PoisedToKick_png.js';
import player01Kicking_png from '../../images/africaModest/player01Kicking_png.js';
import player02Standing_png from '../../images/africaModest/player02Standing_png.js';
import player02PoisedToKick_png from '../../images/africaModest/player02PoisedToKick_png.js';
import player02Kicking_png from '../../images/africaModest/player02Kicking_png.js';
import KickerPortrayalUSA from './KickerPortrayalUSA.js';
import KickerPortrayalAfrica from './KickerPortrayalAfrica.js';
import variabilityPlayer01Standing_png from '../../images/africaModest/variabilityPlayer01Standing_png.js';
import variabilityPlayer01PoisedToKick_png from '../../images/africaModest/variabilityPlayer01PoisedToKick_png.js';
import variabilityPlayer01Kicking_png from '../../images/africaModest/variabilityPlayer01Kicking_png.js';
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
      standing: player01Standing_png,
      poisedToKick: player01PoisedToKick_png,
      kicking: player01Kicking_png
    },
    KickerPortrayalUSA.unnumberedKickerImages[ 14 - 1 ],

    KickerPortrayalAfrica.unnumberedKickerImages[ 3 - 1 ],
    {
      standing: player02Standing_png,
      poisedToKick: player02PoisedToKick_png,
      kicking: player02Kicking_png
    },
    KickerPortrayalAfrica.unnumberedKickerImages[ 7 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 8 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 2 - 1 ],
    KickerPortrayalAfrica.unnumberedKickerImages[ 11 - 1 ] ],

  // Numbered Kickers
  [
    KickerPortrayalAfrica.numberedKickerImages[ 1 - 1 ],
    {
      standing: variabilityPlayer01Standing_png,
      poisedToKick: variabilityPlayer01PoisedToKick_png,
      kicking: variabilityPlayer01Kicking_png
    },
    KickerPortrayalAfrica.numberedKickerImages[ 3 - 1 ],
    KickerPortrayalAfrica.numberedKickerImages[ 4 - 1 ]
  ],
  AFRICA_MODEST_REGION_AND_CULTURE_ID );

export default KickerPortrayalAfricaModest;
