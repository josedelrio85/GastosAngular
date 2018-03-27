import { Component, OnInit, Input } from '@angular/core';
import { coloresEntidad } from '../Modelos/colores-entidad.enum';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit {

  @Input() legend: boolean = true;
  // @Input() labels: boolean = false;
  @Input() labels: string = "";
  @Input() explodeSlices: boolean = false;

  @Input() doughnut: boolean = false;
  @Input() animations: boolean = true;
  @Input() trimLabels: boolean = true;
  @Input() gradient: boolean = false;
  @Input() tooltipDisabled: boolean = false;
  @Input() arcWidth: number = 0.25;
  // @Input() legendTitle: string = "Prueba";  

  @Input() view: number[] = [800, 400];
  @Input() results: any[];

  colorScheme = {
    domain: [coloresEntidad.colorEnt1,
            coloresEntidad.colorEnt2,
            coloresEntidad.colorEnt3,
            coloresEntidad.colorEnt4,
            coloresEntidad.colorEnt5,
            coloresEntidad.colorEnt6,
            coloresEntidad.colorEnt7,
            coloresEntidad.colorEnt8,
            coloresEntidad.colorEnt9,
            coloresEntidad.colorEnt10,
            coloresEntidad.colorEnt11]
  };

  constructor() {}
  
  ngOnInit() {}

  onSelect(event) {
    // console.log(event);
  }
}

