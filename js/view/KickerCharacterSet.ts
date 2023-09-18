// Copyright 2023, University of Colorado Boulder

/**
 * A collection of KickerImageSets. One KickerCharacterSet is active at a time. A different KickerCharacterSet can be selected
 * from preferences.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import RegionAndCulturePortrayal, { RegionAndCulturePortrayalOptions } from '../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import LocalizedStringProperty from '../../../chipper/js/LocalizedStringProperty.js';
import soccerCommon from '../soccerCommon.js';
import { Image } from '../../../scenery/js/imports.js';
import Tandem from '../../../tandem/js/Tandem.js';

export type KickerImageSet = {
  standing: HTMLImageElement;
  poisedToKick: HTMLImageElement;
  kicking: HTMLImageElement;
};

export const portrayalsTandem = Tandem.PREFERENCES.createTandem( 'regionAndCulturePortrayals' );

export default class KickerCharacterSet extends RegionAndCulturePortrayal {

  // Keeps track of how many characters are in each set. This is only needed for unnumbered kickers.
  public readonly unnumberedKickersCount: number;

  public constructor( headshotIcon: Image, labelString: LocalizedStringProperty, public readonly unnumberedKickerImages: KickerImageSet[],
                      public readonly numberedKickerImages: KickerImageSet[], providedOptions: RegionAndCulturePortrayalOptions ) {

    super( headshotIcon, labelString, providedOptions );

    this.unnumberedKickersCount = unnumberedKickerImages.length;
  }
}

soccerCommon.register( 'KickerCharacterSet', KickerCharacterSet );