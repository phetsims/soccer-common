// Copyright 2023, University of Colorado Boulder
/**
 * This is a function that simplifies creation for value readouts in soccer common repos. When there are no data points
 * and the value is calculated as null the readout will display the unknownStringProperty. If the value is not null,
 * the readout will display the value with the patternStringProperty.
 *
 * patternStringProperty must use {{value}} as the placeholder for the value.
 *
 * @author Marla Schulz (PhET Interactive Simulations)
 *
 */

import soccerCommon from '../soccerCommon.js';
import LocalizedStringProperty from '../../../chipper/js/LocalizedStringProperty.js';
import TReadOnlyProperty from '../../../axon/js/TReadOnlyProperty.js';
import DerivedProperty from '../../../axon/js/DerivedProperty.js';
import Utils from '../../../dot/js/Utils.js';
import PatternStringProperty from '../../../axon/js/PatternStringProperty.js';


const createValueReadoutStringProperty = (
  valueProperty: TReadOnlyProperty<number | null>,
  patternStringProperty: TReadOnlyProperty<string>,
  unknownStringProperty: LocalizedStringProperty,
  decimalPlaces: number | null,
  additionalDependencies?: TReadOnlyProperty<unknown>[]
  ): TReadOnlyProperty<string> => {

  const valuePatternStringProperty = new PatternStringProperty( patternStringProperty, {
    value: valueProperty
  }, {
    maps: {
      value: value => value === null ? 'null' : typeof decimalPlaces === 'number' ? Utils.toFixed( value, decimalPlaces ) : value
    }
  } );
  return DerivedProperty.deriveAny( [ unknownStringProperty, valueProperty, valuePatternStringProperty,
    ...( additionalDependencies ? additionalDependencies : [] ) ], () => {
    const result = valueProperty.value;
    return result === null ? unknownStringProperty.value : valuePatternStringProperty.value;
  } );
};

export default createValueReadoutStringProperty;
soccerCommon.register( 'createValueReadoutStringProperty', createValueReadoutStringProperty );