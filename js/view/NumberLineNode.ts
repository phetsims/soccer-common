// Copyright 2023, University of Colorado Boulder

/**
 * NumberLineNode represents a visual representation of a number line, tailored to display data objects with optional
 * features.
 *
 * Features:
 * - Can include tick marks and their respective labels.
 * - Has the flexibility to show or hide the X axis.
 * - Provides customization options such as color and layout.
 *
 * @author Chris Klusendorf (PhET Interactive Simulations)
 * @author Sam Reid (PhET Interactive Simulations)
 */

import soccerCommon from '../soccerCommon.js';
import { Node, NodeOptions, Path, Text, TPaint } from '../../../scenery/js/imports.js';
import optionize from '../../../phet-core/js/optionize.js';
import ChartTransform from '../../../bamboo/js/ChartTransform.js';
import Range from '../../../dot/js/Range.js';
import TickMarkSet from '../../../bamboo/js/TickMarkSet.js';
import Orientation from '../../../phet-core/js/Orientation.js';
import TickLabelSet from '../../../bamboo/js/TickLabelSet.js';
import Utils from '../../../dot/js/Utils.js';
import { Shape } from '../../../kite/js/imports.js';
import StrictOmit from '../../../phet-core/js/types/StrictOmit.js';

type SelfOptions = {
  color?: TPaint;
  includeXAxis: boolean;
};
export type NumberLineNodeOptions = SelfOptions & StrictOmit<NodeOptions, 'tandem'>;

export default class NumberLineNode extends Node {

  // For layout
  public readonly tickMarkSet: TickMarkSet;

  public constructor(
    chartViewWidth: number,
    physicalRange: Range,
    providedOptions?: NumberLineNodeOptions
  ) {

    const options = optionize<NumberLineNodeOptions, SelfOptions, NodeOptions>()( {
      color: 'white',
      isDisposable: false
    }, providedOptions );

    super();

    // Tick marks on the dot plot are a little shorter than in the play area
    const tickMarkExtent = options.includeXAxis ? 7 : 10;

    const chartTransform = new ChartTransform( {
      viewWidth: chartViewWidth,
      modelXRange: physicalRange,
      viewHeight: tickMarkExtent / 2,
      modelYRange: new Range( 0, 1 )
    } );
    const tickMarkSet = new TickMarkSet( chartTransform, Orientation.HORIZONTAL, 1, {
      stroke: options.color,
      extent: tickMarkExtent
    } );
    this.addChild( tickMarkSet );

    this.tickMarkSet = tickMarkSet;

    const tickLabelSet = new TickLabelSet( chartTransform, Orientation.HORIZONTAL, 1, {
      extent: tickMarkExtent + 12,
      createLabel: ( value: number ) => new Text( Utils.toFixed( value, 0 ), {
        fontSize: 16,
        fill: options.color
      } )
    } );
    this.addChild( tickLabelSet );

    if ( options.includeXAxis ) {
      const xAxisNode = new Path( new Shape()
        .moveTo( tickMarkSet.left, 0 )
        .lineTo( tickMarkSet.right, 0 ), {
        stroke: options.color
      } );
      this.addChild( xAxisNode );
    }

    this.mutate( options );
  }

}

soccerCommon.register( 'NumberLineNode', NumberLineNode );