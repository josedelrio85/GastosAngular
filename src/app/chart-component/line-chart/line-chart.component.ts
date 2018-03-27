import { Component, OnInit, Input } from '@angular/core';
import { coloresEntidad } from '../../Modelos/colores-entidad.enum';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() view: number[] = [700, 400];
  @Input() results: any[];
  @Input() gradient:boolean = false;

  @Input() legend: boolean = true;
  @Input() xAxis: boolean = true;
  @Input() yAxis: boolean = true;
  @Input() showXAxisLabel: boolean = true;
  @Input() showYAxisLabel: boolean = true;
  @Input() xAxisLabel: string;
  @Input() yAxisLabel: string;
  @Input() autoScale:boolean = true;
  @Input() legendTitle: string;

  colorScheme = {
    domain: [coloresEntidad.colorEnt2,
            coloresEntidad.colorEnt11]
  };

  constructor() { }

  ngOnInit() {
    this.results = [];
    this.legendTitle = "";
  }

  onSelect($event){

  }
}

export var multi = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];
