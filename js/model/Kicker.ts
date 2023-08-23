// Copyright 2023, University of Colorado Boulder

/**
 * Used to create a representation of a person with images showing different phases of them kicking a ball.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import Pose from './Pose.js';
import EnumerationProperty from '../../../axon/js/EnumerationProperty.js';
import Tandem from '../../../tandem/js/Tandem.js';
import Property from '../../../axon/js/Property.js';
import NullableIO from '../../../tandem/js/types/NullableIO.js';
import NumberIO from '../../../tandem/js/types/NumberIO.js';
import { KickerPhase } from './KickerPhase.js';
import DerivedProperty from '../../../axon/js/DerivedProperty.js';
import TReadOnlyProperty from '../../../axon/js/TReadOnlyProperty.js';
import CharacterSet from '../../../joist/js/preferences/CharacterSet.js';

export default class Kicker {

  // Which portion of the kicking animation the person is currently in. Determines which pose to set.
  public readonly kickerPhaseProperty: Property<KickerPhase>;

  // Which pose the kicker is currently showing. Determines which image to display.
  public readonly poseProperty: TReadOnlyProperty<Pose>;

  // The timestamp for when the kicker's poseProperty was last set to POISED_TO_KICK
  public readonly timestampWhenPoisedBeganProperty: Property<number | null>;

  // Used to determine the artwork for rendering the KickerNode
  public readonly initialPlaceInLine: number;

  public constructor( placeInLine: number, public readonly characterSetProperty: Property<CharacterSet | null>, tandem: Tandem ) {

    this.kickerPhaseProperty = new EnumerationProperty( placeInLine === 0 ? KickerPhase.READY : KickerPhase.INACTIVE, {
      tandem: tandem.createTandem( 'kickerPhaseProperty' ),
      phetioReadOnly: true
    } );

    this.poseProperty = new DerivedProperty( [ this.kickerPhaseProperty ], kickerPhase => {
      if ( kickerPhase === KickerPhase.POISED ) {
        return Pose.POISED_TO_KICK;
      }
      else if ( kickerPhase === KickerPhase.KICKING ) {
        return Pose.KICKING;
      }
      else {
        return Pose.STANDING;
      }
    } );

    this.timestampWhenPoisedBeganProperty = new Property<number | null>( null, {
      tandem: tandem.createTandem( 'timestampWhenPoisedBeganProperty' ),
      phetioValueType: NullableIO( NumberIO ),
      phetioReadOnly: true
    } );
    this.initialPlaceInLine = placeInLine;
  }

  public reset(): void {
    this.kickerPhaseProperty.reset();
    this.timestampWhenPoisedBeganProperty.reset();
  }
}

soccerCommon.register( 'Kicker', Kicker );