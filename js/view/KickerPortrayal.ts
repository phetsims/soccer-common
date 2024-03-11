// Copyright 2023-2024, University of Colorado Boulder

/**
 * A collection of KickerImageSets. One KickerPortrayal is active at a time. A different KickerPortrayal can be selected
 * from preferences.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import RegionAndCulturePortrayal, { RegionAndCulturePortrayalOptions } from '../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import soccerCommon from '../soccerCommon.js';
import { RegionAndCulture } from '../../../joist/js/i18n/regionAndCultureProperty.js';

type KickerPortrayalOptions = RegionAndCulturePortrayalOptions;

export type KickerImageSet = {
  standing: HTMLImageElement;
  poisedToKick: HTMLImageElement;
  kicking: HTMLImageElement;
};

export default class KickerPortrayal extends RegionAndCulturePortrayal {

  // Keeps track of how many characters are in each set. This is only needed for unnumbered kickers.
  public readonly unnumberedKickersCount: number;

  public constructor( regionAndCulture: RegionAndCulture,
                      public readonly unnumberedKickerImages: KickerImageSet[],
                      public readonly numberedKickerImages: KickerImageSet[],
                      providedOptions?: KickerPortrayalOptions ) {

    super( regionAndCulture, providedOptions );

    this.unnumberedKickersCount = unnumberedKickerImages.length;
  }
}

soccerCommon.register( 'KickerPortrayal', KickerPortrayal );