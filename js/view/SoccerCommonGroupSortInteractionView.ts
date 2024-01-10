// Copyright 2023, University of Colorado Boulder

/**
 * TODO: https://github.com/phetsims/scenery-phet/issues/815
 * @author Michael Kauzmann (PhET Interactive Simulations)
 * @author Marla Schulz (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import GroupSortInteractionView from './GroupSortInteractionView.js';
import SoccerBall from '../model/SoccerBall.js';
import SoccerBallNode from './SoccerBallNode.js';

export default class SoccerCommonGroupSortInteractionView extends GroupSortInteractionView<SoccerBall, SoccerBallNode> {
}

soccerCommon.register( 'SoccerCommonGroupSortInteractionView', SoccerCommonGroupSortInteractionView );