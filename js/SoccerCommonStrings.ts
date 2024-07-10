// Copyright 2024, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import soccerCommon from './soccerCommon.js';

type StringsType = {
  'needAtLeastOneKickStringProperty': LocalizedStringProperty;
  'kickStringProperty': LocalizedStringProperty;
  'keyboardHelpDialog': {
    'grabOrReleaseItemHeadingStringProperty': LocalizedStringProperty;
    'grabOrReleaseItemStringProperty': LocalizedStringProperty;
    'moveHeadingStringProperty': LocalizedStringProperty;
    'moveDescriptionStringProperty': LocalizedStringProperty;
  };
  'a11y': {
    'grabSoccerBallStringProperty': LocalizedStringProperty;
    'noSoccerBallsToGrabStringProperty': LocalizedStringProperty;
    'sortingSoccerBallPatternStringProperty': LocalizedStringProperty;
    'selectingSoccerBallPatternStringProperty': LocalizedStringProperty;
  }
};

const SoccerCommonStrings = getStringModule( 'SOCCER_COMMON' ) as StringsType;

soccerCommon.register( 'SoccerCommonStrings', SoccerCommonStrings );

export default SoccerCommonStrings;
