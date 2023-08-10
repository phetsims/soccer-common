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

export type KickDistanceStrategySpecification = {
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
      phetioType: KickDistanceStrategyIO,

      // TODO: Update the documentation to match the new schema: https://github.com/phetsims/center-and-variability/issues/117
      phetioDocumentation: 'The values for the kicks can be specified using the state object. <br><ul>' +
                           `<li>Random Skew: randomly chooses a left or right skewed distribution each time the sim is reset. (Recall that a right-skewed data set means most of the values fall to the left.) ${pre}${code}{ "distributionType": "randomSkew[currentlyRightSkewed]" }</code></pre></li>` +
                           `<li>Probability Distribution by Distance: The distribution of frequencies or probabilities per location on the number line. This is a non-normalized array of non-negative floating point numbers where each number in the array represents the relative likelihood that a ball will land in each position from 1 to 15, in order. e.g., ${pre}${code}{ "distributionType": "probabilityDistributionByDistance[0,0,1,3,5,7,3,3,1,1,0,0,0,0,1]" }</code></pre></li>` +
                           `<li>Exact Location each ball will land (in order) for future kicks. Indicates the exact distance each ball will be kicked in order. Keep in mind the maximum number of kicks may be as high as 30, depending on the selection in the preferences dialog. Whatever kick number is next will be pulled from the array in that position. In other words, if three balls have been kicked, and the user sets the exact location array, the fourth ball will land at the number that's in the fourth position in the array.e.g., ${pre}${code}{ "distributionType": "exactDistanceByIndex[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,2]" }</code></pre></li>`
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

  public applyState( stateObject: KickDistanceStrategySpecification ): void {
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

const KickDistanceStrategyIO = new IOType( 'KickDistanceStrategyIO', {
  supertype: GetSetButtonsIO,
  valueType: KickDistributionStrategy,
  stateSchema: {
    type: StringIO,
    values: NullableIO( ArrayIO( NumberIO ) ),
    skewType: NullableIO( StringIO )
  },
  applyState: ( distribution: KickDistributionStrategy, stateObject: KickDistanceStrategySpecification ) => {
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
      implementation: function( this: KickDistributionStrategy, value: KickDistanceStrategySpecification ) {

        // TODO: check validation, see https://github.com/phetsims/center-and-variability/issues/117
        // Are the values valid, like the "type" values?
        // If skew, are is the value left/right?
        // etc.
        return null;
      },
      documentation: 'Checks to see if a proposed value is valid. Returns the first validation error, or null if the value is valid.'
    },
    setValue: {
      returnType: VoidIO,
      parameterTypes: [ ObjectLiteralIO ],
      documentation: 'Sets the value for the scene model, including the kick distance strategy.',
      implementation: function( this: KickDistributionStrategy, state: KickDistanceStrategySpecification ) {
        this.applyState( state );
      }
    }
  }
} );

soccerCommon.register( 'KickDistributionStrategy', KickDistributionStrategy );