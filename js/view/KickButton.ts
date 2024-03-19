// Copyright 2023, University of Colorado Boulder
/**
 * Multiple soccer common sims use similar buttons to kick soccer balls. This class has default options for those
 * buttons that allows for consistency between sims.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import RectangularPushButton, { RectangularPushButtonOptions } from '../../../sun/js/buttons/RectangularPushButton.js';
import soccerCommon from '../soccerCommon.js';
import optionize from '../../../phet-core/js/optionize.js';
import SoccerCommonColors from '../SoccerCommonColors.js';
import nullSoundPlayer from '../../../tambo/js/shared-sound-players/nullSoundPlayer.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import WithRequired from '../../../phet-core/js/types/WithRequired.js';

type SelfOptions = {
  multiKick: boolean;
};
type KickButtonOptions = SelfOptions & WithRequired<RectangularPushButtonOptions, 'tandem'>;

// constants
const TOUCH_AREA_X_DILATION = 5;
const TOUCH_AREA_Y_DILATION = 4;
export const KICK_BUTTON_FONT = new PhetFont( 16 );

export default class KickButton extends RectangularPushButton {

  public constructor( providedOptions: KickButtonOptions ) {
    const options = optionize<KickButtonOptions, SelfOptions, RectangularPushButtonOptions>()( {
      baseColor: SoccerCommonColors.kickButtonFillColorProperty,
      xMargin: 12,
      yMargin: 12,

      // The Kick 1 button can be held down for repeat kicks, but the Kick 5 cannot.
      fireOnHold: !providedOptions.multiKick,
      fireOnHoldDelay: 750,

      // This needs to be longer than CAVSceneModel.TIME_BETWEEN_RAPID_KICKS plus the poise time, see
      // https://github.com/phetsims/center-and-variability/issues/102
      fireOnHoldInterval: 650,

      soundPlayer: nullSoundPlayer,
      touchAreaXDilation: TOUCH_AREA_X_DILATION,
      touchAreaYDilation: TOUCH_AREA_Y_DILATION,
      touchAreaYShift: providedOptions.multiKick ? TOUCH_AREA_Y_DILATION : -TOUCH_AREA_Y_DILATION
    }, providedOptions );

    super( options );
  }
}

soccerCommon.register( 'KickButton', KickButton );