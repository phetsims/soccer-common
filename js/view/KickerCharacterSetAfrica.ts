// Copyright 2023, University of Colorado Boulder

import KickerCharacterSet, { portrayalsTandem } from './KickerCharacterSet.js';
import player01Standing_png from '../../images/africa/player01Standing_png.js';
import player01PoisedToKick_png from '../../images/africa/player01PoisedToKick_png.js';
import player01Kicking_png from '../../images/africa/player01Kicking_png.js';
import player02Standing_png from '../../images/africa/player02Standing_png.js';
import player02PoisedToKick_png from '../../images/africa/player02PoisedToKick_png.js';
import player02Kicking_png from '../../images/africa/player02Kicking_png.js';
import player03Standing_png from '../../images/africa/player03Standing_png.js';
import player03PoisedToKick_png from '../../images/africa/player03PoisedToKick_png.js';
import player03Kicking_png from '../../images/africa/player03Kicking_png.js';
import player04Standing_png from '../../images/africa/player04Standing_png.js';
import player04PoisedToKick_png from '../../images/africa/player04PoisedToKick_png.js';
import player04Kicking_png from '../../images/africa/player04Kicking_png.js';
import player05Standing_png from '../../images/africa/player05Standing_png.js';
import player05PoisedToKick_png from '../../images/africa/player05PoisedToKick_png.js';
import player05Kicking_png from '../../images/africa/player05Kicking_png.js';
import player06Standing_png from '../../images/africa/player06Standing_png.js';
import player06PoisedToKick_png from '../../images/africa/player06PoisedToKick_png.js';
import player06Kicking_png from '../../images/africa/player06Kicking_png.js';
import player07Standing_png from '../../images/africa/player07Standing_png.js';
import player07PoisedToKick_png from '../../images/africa/player07PoisedToKick_png.js';
import player07Kicking_png from '../../images/africa/player07Kicking_png.js';
import KickerCharacterSetUSA from './KickerCharacterSetUSA.js';
import variabilityPlayer01Standing_png from '../../images/africa/variabilityPlayer01Standing_png.js';
import variabilityPlayer01PoisedToKick_png from '../../images/africa/variabilityPlayer01PoisedToKick_png.js';
import variabilityPlayer01Kicking_png from '../../images/africa/variabilityPlayer01Kicking_png.js';
import variabilityPlayer02Standing_png from '../../images/africa/variabilityPlayer02Standing_png.js';
import variabilityPlayer02PoisedToKick_png from '../../images/africa/variabilityPlayer02PoisedToKick_png.js';
import variabilityPlayer02Kicking_png from '../../images/africa/variabilityPlayer02Kicking_png.js';
import variabilityPlayer03Standing_png from '../../images/africa/variabilityPlayer03Standing_png.js';
import variabilityPlayer03PoisedToKick_png from '../../images/africa/variabilityPlayer03PoisedToKick_png.js';
import variabilityPlayer03Kicking_png from '../../images/africa/variabilityPlayer03Kicking_png.js';
import variabilityPlayer04Standing_png from '../../images/africa/variabilityPlayer04Standing_png.js';
import variabilityPlayer04PoisedToKick_png from '../../images/africa/variabilityPlayer04PoisedToKick_png.js';
import variabilityPlayer04Kicking_png from '../../images/africa/variabilityPlayer04Kicking_png.js';
import { AFRICA_QUERY_VALUE } from '../SoccerCommonQueryParameters.js';
import JoistStrings from '../../../joist/js/JoistStrings.js';

/**
 * Artwork representing characters from Africa.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

const africaStringProperty = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.africaStringProperty;

const KickerCharacterSetAfrica = new KickerCharacterSet(
    africaStringProperty,

    // Unnumbered Kickers
    [
        {
            standing: player01Standing_png,
            poisedToKick: player01PoisedToKick_png,
            kicking: player01Kicking_png
        },
        {
            standing: player02Standing_png,
            poisedToKick: player02PoisedToKick_png,
            kicking: player02Kicking_png
        },
        {
            standing: player03Standing_png,
            poisedToKick: player03PoisedToKick_png,
            kicking: player03Kicking_png
        },
        {
            standing: player04Standing_png,
            poisedToKick: player04PoisedToKick_png,
            kicking: player04Kicking_png
        },

        KickerCharacterSetUSA.unnumberedKickerImages[ 8 - 1 ],
        KickerCharacterSetUSA.unnumberedKickerImages[ 14 - 1 ],

        {
            standing: player06Standing_png,
            poisedToKick: player06PoisedToKick_png,
            kicking: player06Kicking_png
        },

        KickerCharacterSetUSA.unnumberedKickerImages[ 12 - 1 ],
        KickerCharacterSetUSA.unnumberedKickerImages[ 10 - 1 ],
        KickerCharacterSetUSA.unnumberedKickerImages[ 2 - 1 ],

        {
            standing: player05Standing_png,
            poisedToKick: player05PoisedToKick_png,
            kicking: player05Kicking_png
        },
        KickerCharacterSetUSA.unnumberedKickerImages[ 4 - 1 ],
        {
            standing: player07Standing_png,
            poisedToKick: player07PoisedToKick_png,
            kicking: player07Kicking_png
        } ],

    // Numbered Kickers
    [
        {
            standing: variabilityPlayer01Standing_png,
            poisedToKick: variabilityPlayer01PoisedToKick_png,
            kicking: variabilityPlayer01Kicking_png
        },
        {
            standing: variabilityPlayer02Standing_png,
            poisedToKick: variabilityPlayer02PoisedToKick_png,
            kicking: variabilityPlayer02Kicking_png
        },
        {
            standing: variabilityPlayer03Standing_png,
            poisedToKick: variabilityPlayer03PoisedToKick_png,
            kicking: variabilityPlayer03Kicking_png
        },
        {
            standing: variabilityPlayer04Standing_png,
            poisedToKick: variabilityPlayer04PoisedToKick_png,
            kicking: variabilityPlayer04Kicking_png
        }
    ],
    AFRICA_QUERY_VALUE,
    {
        tandem: portrayalsTandem.createTandem( 'kickerPortrayalAfrica' ),
        phetioState: false
    }
);

export default KickerCharacterSetAfrica;
