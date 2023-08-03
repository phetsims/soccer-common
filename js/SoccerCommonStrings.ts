// Copyright 2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
import soccerCommon from './soccerCommon.js';

type StringsType = {
  'soccer-common': {
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'nameStringProperty': LocalizedStringProperty;
  };
  'characterSet': {
    'unitedStatesOfAmericaStringProperty': LocalizedStringProperty;
    'africaStringProperty': LocalizedStringProperty;
    'africaModestStringProperty': LocalizedStringProperty;
  }
};

const SoccerCommonStrings = getStringModule( 'SOCCER_COMMON' ) as StringsType;

soccerCommon.register( 'SoccerCommonStrings', SoccerCommonStrings );

export default SoccerCommonStrings;
