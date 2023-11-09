// Copyright 2023, University of Colorado Boulder

/**
 * HeadshotIcon creates a square image out of a standing kicker png for use in the regionAndCulture combo box.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import RegionAndCultureHeadshotIcon from '../../../joist/js/preferences/RegionAndCultureHeadshotIcon.js';

export default class HeadshotIcon extends RegionAndCultureHeadshotIcon {

  /**
   *
   * @param image
   * @param yClipAreaStart - The starting y value of the clip area since the heights of kickers vary, but all kicker
   *                       - pngs have the same dimension
   */
  public constructor( image: HTMLImageElement, yClipAreaStart: number ) {

    super( image, {
      yClipAreaStart: yClipAreaStart,
      xClipAreaStart: 35,
      headshotDimension: 150,
      scale: 0.12
    } );
  }
}

soccerCommon.register( 'HeadshotIcon', HeadshotIcon );