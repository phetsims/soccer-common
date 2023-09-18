// Copyright 2023, University of Colorado Boulder
import BooleanProperty from '../../../axon/js/BooleanProperty.js';

/**
 * isResettingProperty keeps track of whether the sim is undergoing a reset, so that we can suppress audio during reset.
 *
 * @author Sam Reid (PhET Interactive Simulation)
 * @author Matt Blackman (PhET Interactive Simulations)
 * @author Marla Schulz (PhET Interactive Simulations)
 */
const isResettingProperty = new BooleanProperty( false );
export default isResettingProperty;