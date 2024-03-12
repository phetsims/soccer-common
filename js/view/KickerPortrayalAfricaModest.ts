// Copyright 2023-2024, University of Colorado Boulder

import KickerPortrayal from './KickerPortrayal.js';
import KickerPortrayalUSA from './KickerPortrayalUSA.js';
import KickerPortrayalAfrica from './KickerPortrayalAfrica.js';
import africaModestVariabilityKicker02Standing_svg from '../../images/africaModest/africaModestVariabilityKicker02Standing_svg.js';
import africaModestVariabilityKicker02PoisedToKick_svg from '../../images/africaModest/africaModestVariabilityKicker02PoisedToKick_svg.js';
import africaModestVariabilityKicker02Kicking_svg from '../../images/africaModest/africaModestVariabilityKicker02Kicking_svg.js';
import africaModestKicker01Standing_svg from '../../images/africaModest/africaModestKicker01Standing_svg.js';
import africaModestKicker01PoisedToKick_svg from '../../images/africaModest/africaModestKicker01PoisedToKick_svg.js';
import africaModestKicker01Kicking_svg from '../../images/africaModest/africaModestKicker01Kicking_svg.js';
import africaModestKicker02Standing_svg from '../../images/africaModest/africaModestKicker02Standing_svg.js';
import africaModestKicker02PoisedToKick_svg from '../../images/africaModest/africaModestKicker02PoisedToKick_svg.js';
import africaModestKicker02Kicking_svg from '../../images/africaModest/africaModestKicker02Kicking_svg.js';
import africaModestKicker03Standing_svg from '../../images/africaModest/africaModestKicker03Standing_svg.js';
import africaModestKicker03PoisedToKick_svg from '../../images/africaModest/africaModestKicker03PoisedToKick_svg.js';
import africaModestKicker03Kicking_svg from '../../images/africaModest/africaModestKicker03Kicking_svg.js';
import africaModestKicker05Standing_svg from '../../images/africaModest/africaModestKicker05Standing_svg.js';
import africaModestKicker05PoisedToKick_svg from '../../images/africaModest/africaModestKicker05PoisedToKick_svg.js';
import africaModestKicker05Kicking_svg from '../../images/africaModest/africaModestKicker05Kicking_svg.js';
import africaModestKicker07Standing_svg from '../../images/africaModest/africaModestKicker07Standing_svg.js';
import africaModestKicker07PoisedToKick_svg from '../../images/africaModest/africaModestKicker07PoisedToKick_svg.js';
import africaModestKicker07Kicking_svg from '../../images/africaModest/africaModestKicker07Kicking_svg.js';
import africaModestKicker11Standing_svg from '../../images/africaModest/africaModestKicker11Standing_svg.js';
import africaModestKicker11PoisedToKick_svg from '../../images/africaModest/africaModestKicker11PoisedToKick_svg.js';
import africaModestKicker11Kicking_svg from '../../images/africaModest/africaModestKicker11Kicking_svg.js';
import africaModestKicker13Standing_svg from '../../images/africaModest/africaModestKicker13Standing_svg.js';
import africaModestKicker13PoisedToKick_svg from '../../images/africaModest/africaModestKicker13PoisedToKick_svg.js';
import africaModestKicker13Kicking_svg from '../../images/africaModest/africaModestKicker13Kicking_svg.js';

/**
 * Artwork representing characters from Africa (modest).
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

const KickerPortrayalAfricaModest = new KickerPortrayal(
  'africaModest',

  // Unnumbered Kickers
  [
    {
      standing: africaModestKicker01Standing_svg,
      poisedToKick: africaModestKicker01PoisedToKick_svg,
      kicking: africaModestKicker01Kicking_svg
    },
    {
      standing: africaModestKicker02Standing_svg,
      poisedToKick: africaModestKicker02PoisedToKick_svg,
      kicking: africaModestKicker02Kicking_svg
    },
    {
      standing: africaModestKicker03Standing_svg,
      poisedToKick: africaModestKicker03PoisedToKick_svg,
      kicking: africaModestKicker03Kicking_svg
    },
    KickerPortrayalAfrica.unnumberedKickerImages[ 7 - 1 ],
    {
      standing: africaModestKicker05Standing_svg,
      poisedToKick: africaModestKicker05PoisedToKick_svg,
      kicking: africaModestKicker05Kicking_svg
    },
    KickerPortrayalUSA.unnumberedKickerImages[ 8 - 1 ],
    {
      standing: africaModestKicker07Standing_svg,
      poisedToKick: africaModestKicker07PoisedToKick_svg,
      kicking: africaModestKicker07Kicking_svg
    },
    KickerPortrayalAfrica.unnumberedKickerImages[ 14 - 1 ],
    KickerPortrayalAfrica.unnumberedKickerImages[ 13 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 2 - 1 ],
    {
      standing: africaModestKicker11Standing_svg,
      poisedToKick: africaModestKicker11PoisedToKick_svg,
      kicking: africaModestKicker11Kicking_svg
    },
    KickerPortrayalAfrica.unnumberedKickerImages[ 1 - 1 ],
    {
      standing: africaModestKicker13Standing_svg,
      poisedToKick: africaModestKicker13PoisedToKick_svg,
      kicking: africaModestKicker13Kicking_svg
    },
    KickerPortrayalAfrica.unnumberedKickerImages[ 4 - 1 ],
    KickerPortrayalAfrica.unnumberedKickerImages[ 15 - 1 ]
  ],

  // Numbered Kickers
  [
    KickerPortrayalAfrica.numberedKickerImages[ 1 - 1 ],
    {
      standing: africaModestVariabilityKicker02Standing_svg,
      poisedToKick: africaModestVariabilityKicker02PoisedToKick_svg,
      kicking: africaModestVariabilityKicker02Kicking_svg
    },
    KickerPortrayalAfrica.numberedKickerImages[ 3 - 1 ],
    KickerPortrayalAfrica.numberedKickerImages[ 4 - 1 ]
  ]
);

export default KickerPortrayalAfricaModest;
