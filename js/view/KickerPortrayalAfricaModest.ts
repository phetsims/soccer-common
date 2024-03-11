// Copyright 2023-2024, University of Colorado Boulder

import KickerPortrayal from './KickerPortrayal.js';
import africaModestKicker03Standing_png from '../../images/africaModest/africaModestKicker03Standing_png.js';
import africaModestKicker03PoisedToKick_png from '../../images/africaModest/africaModestKicker03PoisedToKick_png.js';
import africaModestKicker03Kicking_png from '../../images/africaModest/africaModestKicker03Kicking_png.js';
import africaModestKicker06Standing_png from '../../images/africaModest/africaModestKicker06Standing_png.js';
import africaModestKicker06PoisedToKick_png from '../../images/africaModest/africaModestKicker06PoisedToKick_png.js';
import africaModestKicker06Kicking_png from '../../images/africaModest/africaModestKicker06Kicking_png.js';
import KickerPortrayalUSA from './KickerPortrayalUSA.js';
import KickerPortrayalAfrica from './KickerPortrayalAfrica.js';
import africaModestVariabilityKicker02Standing_png from '../../images/africaModest/africaModestVariabilityKicker02Standing_png.js';
import africaModestVariabilityKicker02PoisedToKick_png from '../../images/africaModest/africaModestVariabilityKicker02PoisedToKick_png.js';
import africaModestVariabilityKicker02Kicking_png from '../../images/africaModest/africaModestVariabilityKicker02Kicking_png.js';

/**
 * Artwork representing characters from Africa (modest).
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

const KickerPortrayalAfricaModest = new KickerPortrayal(
  'africaModest',

  // Unnumbered Kickers
  [
    KickerPortrayalAfrica.unnumberedKickerImages[ 1 - 1 ],
    KickerPortrayalAfrica.unnumberedKickerImages[ 4 - 1 ],
    {
      standing: africaModestKicker03Standing_png,
      poisedToKick: africaModestKicker03PoisedToKick_png,
      kicking: africaModestKicker03Kicking_png
    },
    KickerPortrayalUSA.unnumberedKickerImages[ 14 - 1 ],

    KickerPortrayalAfrica.unnumberedKickerImages[ 3 - 1 ],
    {
      standing: africaModestKicker06Standing_png,
      poisedToKick: africaModestKicker06PoisedToKick_png,
      kicking: africaModestKicker06Kicking_png
    },
    KickerPortrayalAfrica.unnumberedKickerImages[ 7 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 8 - 1 ],
    KickerPortrayalUSA.unnumberedKickerImages[ 2 - 1 ],
    KickerPortrayalAfrica.unnumberedKickerImages[ 11 - 1 ] ],

  // Numbered Kickers
  [
    KickerPortrayalAfrica.numberedKickerImages[ 1 - 1 ],
    {
      standing: africaModestVariabilityKicker02Standing_png,
      poisedToKick: africaModestVariabilityKicker02PoisedToKick_png,
      kicking: africaModestVariabilityKicker02Kicking_png
    },
    KickerPortrayalAfrica.numberedKickerImages[ 3 - 1 ],
    KickerPortrayalAfrica.numberedKickerImages[ 4 - 1 ]
  ]
);

export default KickerPortrayalAfricaModest;
