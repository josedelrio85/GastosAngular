import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos-service.service';
import { anhos } from '../Modelos/Global';

@Component({
  selector: 'app-resultante',
  templateUrl: './resultante.component.html',
  styleUrls: ['./resultante.component.css']
})
export class ResultanteComponent implements OnInit {

  listaResumen: any[];
  listaAnho: any[] = [];
  selectorAnho: number;
  grafica: any[];

  constructor(private gastosService: GastosService) { }

  ngOnInit() {
    this.listaAnho = anhos;
    
    this.selectorAnho = new Date().getFullYear();
    this.getResultante();
    this.getResultanteMesGrafica();
  }

  getFecha(){
    this.getResultante();
    this.getResultanteMesGrafica();
  }

  getResultante(){
    this.gastosService.getResultanteMes(this.selectorAnho).subscribe(z => {
      this.listaResumen = z;

      z.forEach((v,k) => {
        let resumenChart: any[] = [];

        v.elementos.forEach(element => {
          resumenChart.push({name: element.tipo, value: element.valor })          
        });

        this.listaResumen[k]['chart'] = resumenChart;
      });
    });
  }

  getResultanteMesGrafica(){
    this.gastosService.getResultanteMesGrafica(this.selectorAnho).subscribe(z => {
      this.grafica = z;
    });
  }
}