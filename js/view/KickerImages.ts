// Copyright 2023, University of Colorado Boulder

/**
 * Responsible for all Kicker images. Collects the images into usable classes to support animation, and selecting a
 * different set of kicker characters for localization.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import soccerCommon from '../soccerCommon.js';
import KickerPortrayalUSA from './KickerPortrayalUSA.js';
import KickerPortrayalAfrica from './KickerPortrayalAfrica.js';
import KickerPortrayalAfricaModest from './KickerPortrayalAfricaModest.js';

const KickerImages = [ KickerPortrayalUSA, KickerPortrayalAfrica, KickerPortrayalAfricaModest ];

soccerCommon.register( 'KickerImages', KickerImages );

export default KickerImages;