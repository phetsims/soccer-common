// Copyright 2023-2024, University of Colorado Boulder

import KickerPortrayal from './KickerPortrayal.js';
import africaPlayer01Standing_png from '../../images/africa/africaPlayer01Standing_png.js';
import africaPlayer01PoisedToKick_png from '../../images/africa/africaPlayer01PoisedToKick_png.js';
import africaPlayer01Kicking_png from '../../images/africa/africaPlayer01Kicking_png.js';
import africaPlayer02Standing_png from '../../images/africa/africaPlayer02Standing_png.js';
import africaPlayer02PoisedToKick_png from '../../images/africa/africaPlayer02PoisedToKick_png.js';
import africaPlayer02Kicking_png from '../../images/africa/africaPlayer02Kicking_png.js';
import africaPlayer03Standing_png from '../../images/africa/africaPlayer03Standing_png.js';
import africaPlayer03PoisedToKick_png from '../../images/africa/africaPlayer03PoisedToKick_png.js';
import africaPlayer03Kicking_png from '../../images/africa/africaPlayer03Kicking_png.js';
import africaPlayer04Standing_png from '../../images/africa/africaPlayer04Standing_png.js';
import africaPlayer04PoisedToKick_png from '../../images/africa/africaPlayer04PoisedToKick_png.js';
import africaPlayer04Kicking_png from '../../images/africa/africaPlayer04Kicking_png.js';
import africaPlayer07Standing_png from '../../images/africa/africaPlayer07Standing_png.js';
import africaPlayer07PoisedToKick_png from '../../images/africa/africaPlayer07PoisedToKick_png.js';
import africaPlayer07Kicking_png from '../../images/africa/africaPlayer07Kicking_png.js';
import africaPlayer11Standing_png from '../../images/africa/africaPlayer11Standing_png.js';
import africaPlayer11PoisedToKick_png from '../../images/africa/africaPlayer11PoisedToKick_png.js';
import africaPlayer11Kicking_png from '../../images/africa/africaPlayer11Kicking_png.js';
import africaPlayer13Standing_png from '../../images/africa/africaPlayer13Standing_png.js';
import africaPlayer13PoisedToKick_png from '../../images/africa/africaPlayer13PoisedToKick_png.js';
import africaPlayer13Kicking_png from '../../images/africa/africaPlayer13Kicking_png.js';
import KickerPortrayalUSA from './KickerPortrayalUSA.js';
import africaVariabilityPlayer01Standing_png from '../../images/africa/africaVariabilityPlayer01Standing_png.js';
import africaVariabilityPlayer01PoisedToKick_png from '../../images/africa/africaVariabilityPlayer01PoisedToKick_png.js';
import africaVariabilityPlayer01Kicking_png from '../../images/africa/africaVariabilityPlayer01Kicking_png.js';
import africaVariabilityPlayer02Standing_png from '../../images/africa/africaVariabilityPlayer02Standing_png.js';
import africaVariabilityPlayer02PoisedToKick_png from '../../images/africa/africaVariabilityPlayer02PoisedToKick_png.js';
import africaVariabilityPlayer02Kicking_png from '../../images/africa/africaVariabilityPlayer02Kicking_png.js';
import africaVariabilityPlayer03Standing_png from '../../images/africa/africaVariabilityPlayer03Standing_png.js';
import africaVariabilityPlayer03PoisedToKick_png from '../../images/africa/africaVariabilityPlayer03PoisedToKick_png.js';
import africaVariabilityPlayer03Kicking_png from '../../images/africa/africaVariabilityPlayer03Kicking_png.js';
import africaVariabilityPlayer04Standing_png from '../../images/africa/africaVariabilityPlayer04Standing_png.js';
import africaVariabilityPlayer04PoisedToKick_png from '../../images/africa/africaVariabilityPlayer04PoisedToKick_png.js';
import africaVariabilityPlayer04Kicking_png from '../../images/africa/africaVariabilityPlayer04Kicking_png.js';

/**
 * Artwork representing characters from Africa.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

const KickerPortrayalAfrica = new KickerPortrayal(
  'africa',

  // Unnumbered Kickers
  [
    {
      standing: africaPlayer01Standing_png,
      poisedToKick: africaPlayer01PoisedToKick_png,
      kicking: africaPlayer01Kicking_png
    },
    {
      standing: africaPlayer02Standing_png,
      poisedToKick: africaPlayer02PoisedToKick_png,
      kicking: africaPlayer02Kicking_png
    },
    {
      standing: africaPlayer03Standing_png,
      poisedToKick: africaPlayer03PoisedToKick_png,
      kicking: africaPlayer03Kicking_png
    },
    {
      standing: africaPlayer04Standing_png,
      poisedToKick: africaPlayer04PoisedToKick_png,
      kicking: africaPlayer04Kicking_png
    },

    KickerPortrayalUSA.unnumberedKickerImages[ 8 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 14 - 1 ],

    {
      standing: africaPlayer07Standing_png,
      poisedToKick: africaPlayer07PoisedToKick_png,
      kicking: africaPlayer07Kicking_png
    },

    KickerPortrayalUSA.unnumberedKickerImages[ 12 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 10 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 2 - 1 ],

    {
      standing: africaPlayer11Standing_png,
      poisedToKick: africaPlayer11PoisedToKick_png,
      kicking: africaPlayer11Kicking_png
    },
    KickerPortrayalUSA.unnumberedKickerImages[ 4 - 1 ],
    {
      standing: africaPlayer13Standing_png,
      poisedToKick: africaPlayer13PoisedToKick_png,
      kicking: africaPlayer13Kicking_png
    } ],

  // Numbered Kickers
  [
    {
      standing: africaVariabilityPlayer01Standing_png,
      poisedToKick: africaVariabilityPlayer01PoisedToKick_png,
      kicking: africaVariabilityPlayer01Kicking_png
    },
    {
      standing: africaVariabilityPlayer02Standing_png,
      poisedToKick: africaVariabilityPlayer02PoisedToKick_png,
      kicking: africaVariabilityPlayer02Kicking_png
    },
    {
      standing: africaVariabilityPlayer03Standing_png,
      poisedToKick: africaVariabilityPlayer03PoisedToKick_png,
      kicking: africaVariabilityPlayer03Kicking_png
    },
    {
      standing: africaVariabilityPlayer04Standing_png,
      poisedToKick: africaVariabilityPlayer04PoisedToKick_png,
      kicking: africaVariabilityPlayer04Kicking_png
    }
  ]
);

export default KickerPortrayalAfrica;
