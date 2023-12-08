// Copyright 2023, University of Colorado Boulder

/**
 * A collection of KickerImageSets. One KickerPortrayal is active at a time. A different KickerPortrayal can be selected
 * from preferences.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import RegionAndCulturePortrayal, { RegionAndCulturePortrayalOptions } from '../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import LocalizedStringProperty from '../../../chipper/js/LocalizedStringProperty.js';
import soccerCommon from '../soccerCommon.js';
import Tandem from '../../../tandem/js/Tandem.js';

export type KickerImageSet = {
  standing: HTMLImageElement;
  poisedToKick: HTMLImageElement;
  kicking: HTMLImageElement;
};

export const portrayalsTandem = Tandem.PREFERENCES.createTandem( 'regionAndCulturePortrayals' );

export default class KickerPortrayal extends RegionAndCulturePortrayal {

  // Keeps track of how many characters are in each set. This is only needed for unnumbered kickers.
  public readonly unnumberedKickersCount: number;

  public constructor( labelString: LocalizedStringProperty,
                      public readonly unnumberedKickerImages: KickerImageSet[],
                      public readonly numberedKickerImages: KickerImageSet[],
                      queryParameterValue: string,
                      providedOptions: RegionAndCulturePortrayalOptions ) {

    super( labelString, queryParameterValue, providedOptions );

    this.unnumberedKickersCount = unnumberedKickerImages.length;
  }
}

soccerCommon.register( 'KickerPortrayal', KickerPortrayal );