// Copyright 2023, University of Colorado Boulder

import KickerCharacterSet, { portrayalsTandem } from './KickerCharacterSet.js';
import player01Standing_png from '../../images/africaModest/player01Standing_png.js';
import player01PoisedToKick_png from '../../images/africaModest/player01PoisedToKick_png.js';
import player01Kicking_png from '../../images/africaModest/player01Kicking_png.js';
import player02Standing_png from '../../images/africaModest/player02Standing_png.js';
import player02PoisedToKick_png from '../../images/africaModest/player02PoisedToKick_png.js';
import player02Kicking_png from '../../images/africaModest/player02Kicking_png.js';
import KickerCharacterSetUSA from './KickerCharacterSetUSA.js';
import KickerCharacterSetAfrica from './KickerCharacterSetAfrica.js';
import SoccerCommonStrings from '../SoccerCommonStrings.js';
import HeadshotIcon from './HeadshotIcon.js';
import player03Standing_png from '../../images/africa/player03Standing_png.js';
import variabilityPlayer01Standing_png from '../../images/africaModest/variabilityPlayer01Standing_png.js';
import variabilityPlayer01PoisedToKick_png from '../../images/africaModest/variabilityPlayer01PoisedToKick_png.js';
import variabilityPlayer01Kicking_png from '../../images/africaModest/variabilityPlayer01Kicking_png.js';
import { AFRICA_MODEST_QUERY_VALUE } from '../SoccerCommonQueryParameters.js';

/**
 * Artwork representing characters from Africa (modest).
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

const africaModestStringProperty = SoccerCommonStrings.characterSet.africaModestStringProperty;

const KickerCharacterSetAfricaModest = new KickerCharacterSet(
  new HeadshotIcon( player03Standing_png, 50 ),
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
  [
    KickerCharacterSetAfrica.numberedKickerImages[ 1 - 1 ],
    {
      standing: variabilityPlayer01Standing_png,
      poisedToKick: variabilityPlayer01PoisedToKick_png,
      kicking: variabilityPlayer01Kicking_png
    },
    KickerCharacterSetAfrica.numberedKickerImages[ 3 - 1 ],
    KickerCharacterSetAfrica.numberedKickerImages[ 4 - 1 ]
  ],
  AFRICA_MODEST_QUERY_VALUE,
  {
    tandem: portrayalsTandem.createTandem( 'kickerPortrayalAfricaModest' ),
    phetioState: false
  }
);

export default KickerCharacterSetAfricaModest;
