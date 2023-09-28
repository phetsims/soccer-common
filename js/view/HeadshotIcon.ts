// Copyright 2023, University of Colorado Boulder

/**
 * HeadshotIcon creates a square image out of a standing kicker png for use in the regionAndCulture combo box.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import { Image } from '../../../scenery/js/imports.js';
import { Shape } from '../../../kite/js/imports.js';

export default class HeadshotIcon extends Image {

  /**
   *
   * @param image
   * @param yClipAreaStart - The starting y value of the clip area since the heights of kickers vary, but all kicker
   *                       - pngs have the same dimension
   */
  public constructor( image: HTMLImageElement, yClipAreaStart: number ) {
    const xClipAreaStart = 35;
    const headshotDimension = 150;
    super( image, {
      clipArea: Shape.rectangle( xClipAreaStart, yClipAreaStart, xClipAreaStart + headshotDimension, yClipAreaStart + headshotDimension ),
      scale: 0.12,
      renderer: 'canvas' //this is specifically addressing a Safari clip-area bug. https://github.com/phetsims/center-and-variability/issues/561
    } );
  }
}

soccerCommon.register( 'HeadshotIcon', HeadshotIcon );