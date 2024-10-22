// Copyright 2024, University of Colorado Boulder

/**
 * ESLint configuration for soccer-common.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 * @author Michael Kauzmann (PhET Interactive Simulations)
 */

import simEslintConfig from '../perennial-alias/js/eslint/sim.eslint.config.mjs';

export default [
  ...simEslintConfig,
  {
    files: [ '**/*.ts' ],
    rules: {
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': true,
          'ts-ignore': true,
          'ts-check': true,
          'ts-nocheck': true
        }
      ],
      'phet/additional-bad-text': [
        'error',
        {
          forbiddenTextObjects: [
            'dispose',
            '../center-and-variability/js'
          ]
        }
      ]
    }
  }
];