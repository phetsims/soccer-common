// Copyright 2023, University of Colorado Boulder

/**
 * A collection of KickerImageSets. One KickerCharacterSet is active at a time. A different KickerCharacterSet can be selected
 * from preferences.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import CharacterSet from '../../../joist/js/preferences/CharacterSet.js';
import LocalizedStringProperty from '../../../chipper/js/LocalizedStringProperty.js';
import soccerCommon from '../soccerCommon.js';
import { Image } from '../../../scenery/js/imports.js';

export type KickerImageSet = {
  standing: HTMLImageElement;
  poisedToKick: HTMLImageElement;
  kicking: HTMLImageElement;
};

export default class KickerCharacterSet extends CharacterSet {

  //REVIEW inappropriate references to "1st and 2nd screens" and "3rd screen"
  // Keeps track of how many characters are in each set. This is only needed for the unnumbered kickers in the 1st and 2nd screens.
  // THe numbered kickers will always be a length of 4, because there are 4 scenes in the 3rd screen.
  public readonly unnumberedKickersCount: number;

  public constructor( headshot: HTMLImageElement, labelString: LocalizedStringProperty, public readonly unnumberedKickerImages: KickerImageSet[], public readonly numberedKickerImages: KickerImageSet[] ) {

    const headshotIcon = new Image( headshot, { scale: 0.35 } );
    super( headshotIcon, labelString );

    this.unnumberedKickersCount = unnumberedKickerImages.length;
  }
}

soccerCommon.register( 'KickerCharacterSet', KickerCharacterSet );