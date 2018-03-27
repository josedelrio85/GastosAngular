import { Component, OnInit, Input } from '@angular/core';
import { coloresEntidad } from '../../Modelos/colores-entidad.enum';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit {

  @Input() view: number[] = [300, 300];
  @Input() results :any[];
  @Input() gradient : boolean = true;
  @Input() showXAxis : boolean = true;;
  @Input() showYAxis : boolean = true;;
  @Input() legend : boolean = true;;
  @Input() showXAxisLabel : boolean = false;;
  @Input() showYAxisLabel : boolean = false; ;
  @Input() xAxisLabel : string = '';
  @Input() yAxisLabel : string = '';

  colorScheme = {
    domain: [coloresEntidad.colorEnt2,
            coloresEntidad.colorEnt11]
  };

  constructor() {}

  ngOnInit() {
  }

  onSelect(event){
    //console.log(event);
  }

}
