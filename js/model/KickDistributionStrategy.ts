// Copyright 2023, University of Colorado Boulder

/**
 * PhetioObject that specifies how kick distances are determined. Can be used to specify probability distributions
 * or exact sequences of distances. See phetioDocumentation for more details.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import PhetioObject, { PhetioObjectOptions } from '../../../tandem/js/PhetioObject.js';
import soccerCommon from '../soccerCommon.js';
import IOType from '../../../tandem/js/types/IOType.js';
import StringIO from '../../../tandem/js/types/StringIO.js';
import VoidIO from '../../../tandem/js/types/VoidIO.js';
import ObjectLiteralIO from '../../../tandem/js/types/ObjectLiteralIO.js';
import NullableIO from '../../../tandem/js/types/NullableIO.js';
import optionize, { EmptySelfOptions } from '../../../phet-core/js/optionize.js';
import NumberIO from '../../../tandem/js/types/NumberIO.js';
import ArrayIO from '../../../tandem/js/types/ArrayIO.js';
import dotRandom from '../../../dot/js/dotRandom.js';
import CAVConstants from '../../../center-and-variability/js/common/CAVConstants.js';
import GetSetButtonsIO from '../../../tandem/js/types/GetSetButtonsIO.js';

type DistributionType = 'probabilityByDistance' | 'distanceByIndex' | 'randomSkew';

export type KickDistributionStrategySpecification = {
  type: DistributionType;
  values: number[] | null;
  skewType: 'left' | 'right' | null;
};

export default class KickDistributionStrategy extends PhetioObject {

  public constructor(
    public type: DistributionType,
    public values: number[] | null,
    public skewType: 'left' | 'right' | null,
    providedOptions?: PhetioObjectOptions ) {

    const pre = '<pre style="display: block; padding: 10px; border: 1px solid #ccc; border-radius: 3px; overflow: auto;">';
    const code = '<code style="background-color: #f9f9f9; font-family: \'Courier New\', Courier, monospace;">';

    const options = optionize<PhetioObjectOptions, EmptySelfOptions, PhetioObjectOptions>()( {
      phetioType: KickDistributionStrategyIO,

      phetioDocumentation: 'The rules for kick distances can be specified using the state object. There are three ways to customize the values:<br><ul>' +
                           `<li><b>Probability by Distance</b>: Defines the frequencies or relative likelihoods per each location on the number line. The "values" array should contain only positive real numbers, where each value is the relative likelihood that a ball will land in each position from 1 to 15, in order. The array does not need to be normalized. e.g., ${pre}${code}{<br>   "type": "probabilityByDistance",<br>   "values": [0,0,1,3,5,7,3,3,1,1,0,0,0,0,1],<br>   "skewType": null<br>}</code></pre></li>` +
                           `<li><b>Distance By Index</b>: Defines the location that each ball will land in the order it is kicked. e.g. If three balls have been kicked, the next ball will land at the value in fourth position in the "values" array. Values should be positive integers from 1 to 15, and have a length equal to the maximum number of kicks for the scene. (Note: The maximum number of kicks may be as high as 30, depending on the selection in the preferences dialog) ${pre}${code}{<br>   "type": "distanceByIndex",<br>   "values": [5,11,9,12,10,2,7,3,4,14,1,15,8,13,2,4,12,10,6,1,13,9,3,14,5,6,11,8,7,15],<br>   "skewType": null<br>}</code></pre></li>` +
                           `<li><b>Random Skew</b>: Randomly chooses a left or right skewed distribution each time the sim is reset. "skewType" defines the initial skew of the distribution, which can be "left" or "right". (Recall that a right-skewed data set means most of the values fall to the left.) ${pre}${code}{<br>   "type": "randomSkew",<br>   "values": null,<br>   "skewType": "right"<br>}</code></pre></li>`
    }, providedOptions );

    super( options );
  }

  public getKickDistance( kickIndex: number ): number {
    if ( this.type === 'randomSkew' ) {
      if ( this.skewType === 'left' ) {
        return dotRandom.sampleProbabilities( CAVConstants.LEFT_SKEWED_DATA ) + 1;
      }
      else if ( this.skewType === 'right' ) {
        return dotRandom.sampleProbabilities( CAVConstants.RIGHT_SKEWED_DATA ) + 1;
      }
      else {
        assert && assert( false, 'incorrect skewType: ' + this.skewType );
        return -1;
      }
    }
    else if ( this.type === 'probabilityByDistance' ) {
      return dotRandom.sampleProbabilities( this.values! ) + 1;
    }
    else if ( this.type === 'distanceByIndex' ) {
      return this.values![ kickIndex ];
    }
    else {
      assert && assert( false, 'incorrect type: ' + this.type );
      return -1;
    }
  }

  public applyState( stateObject: KickDistributionStrategySpecification ): void {
    this.type = stateObject.type;
    this.values = stateObject.values;
    this.skewType = stateObject.skewType;
  }

  public static chooseSkewDirection(): 'left' | 'right' {
    return dotRandom.nextBoolean() ? 'left' : 'right';
  }

  public reset(): void {
    if ( this.type === 'randomSkew' ) {
      this.skewType = KickDistributionStrategy.chooseSkewDirection();
    }
  }
}

const KickDistributionStrategyIO = new IOType( 'KickDistributionStrategyIO', {
  supertype: GetSetButtonsIO,
  valueType: KickDistributionStrategy,
  stateSchema: {
    type: StringIO,
    values: NullableIO( ArrayIO( NumberIO ) ),
    skewType: NullableIO( StringIO )
  },
  applyState: ( distribution: KickDistributionStrategy, stateObject: KickDistributionStrategySpecification ) => {
    distribution.applyState( stateObject );
  },
  methods: {
    getValue: {
      returnType: ObjectLiteralIO,
      parameterTypes: [],
      implementation: function( this: KickDistributionStrategy ) {
        const state = phet.phetio.phetioEngine.phetioStateEngine.getState( this );
        return state[ this.phetioID ];
      },
      documentation: 'Gets the current value of the CAVSceneModel'
    },
    getValidationError: {
      returnType: NullableIO( StringIO ),
      parameterTypes: [ ObjectLiteralIO ],
      implementation: function( this: KickDistributionStrategy, value: KickDistributionStrategySpecification ) {

        const errors: string[] = [];

        // 1. Check the type property.
        if ( !value.hasOwnProperty( 'type' ) ) {
          errors.push( 'type is required. It must be one of the following: "probabilityByDistance", "distanceByIndex", or "randomSkew"' );
        }
        else {
          if ( value.type !== 'probabilityByDistance' && value.type !== 'distanceByIndex' && value.type !== 'randomSkew' ) {
            errors.push( 'type must be one of the following: "probabilityByDistance", "distanceByIndex", or "randomSkew"' );
          }
        }

        // 2. For types 'probabilityByDistance' and 'distanceByIndex', check the values.
        if ( value.type === 'probabilityByDistance' || value.type === 'distanceByIndex' ) {
          if ( value.values === null ) {
            errors.push( 'values must be specified for type: ' + value.type );
          }
          else if ( !Array.isArray( value.values ) ) {
            errors.push( 'values must be an array for type: ' + value.type );
          }
          else if ( value.values.some( v => typeof v !== 'number' ) ) {
            errors.push( 'all elements in values must be numbers for type: ' + value.type );
          }
        }

        // 3. For type 'randomSkew', check the skewType.
        if ( value.type === 'randomSkew' ) {
          if ( value.skewType !== 'left' && value.skewType !== 'right' ) {
            errors.push( 'skewType must be one of the following: "left" or "right"' );
          }
        }

        // 4. Check for unnecessary properties.
        for ( const key in value ) {
          if ( ![ 'type', 'values', 'skewType' ].includes( key ) ) {
            errors.push( `Unexpected property: "${key}"` );
          }
        }

        // Return all errors or null if none found.
        if ( errors.length === 0 ) {
          return null;
        }
        else {
          return errors.join( ', ' );
        }
      },
      documentation: 'Checks to see if a proposed value is valid. Returns the first validation error, or null if the value is valid.'
    },
    setValue: {
      returnType: VoidIO,
      parameterTypes: [ ObjectLiteralIO ],
      documentation: 'Sets the value for the scene model, including the kick distance strategy.',
      implementation: function( this: KickDistributionStrategy, state: KickDistributionStrategySpecification ) {
        this.applyState( state );
      }
    }
  }
} );

soccerCommon.register( 'KickDistributionStrategy', KickDistributionStrategy );