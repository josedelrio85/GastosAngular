import { Component, OnInit } from '@angular/core';
import { GastosComponent } from '../gastos/gastos.component';
import { GastosService } from '../services/gastos-service.service';
import { Router } from '@angular/router';
import { Meses } from '../Modelos/meses.enum';
import { anhos } from '../Modelos/Global';

@Component({
  selector: 'app-gastos-resumen',
  templateUrl: './gastos-resumen.component.html',
  styleUrls: ['./gastos-resumen.component.css']
})
export class GastosResumenComponent implements OnInit {

  listaResumen: any[];
  listaAnho: any[] = [];
  selectorAnho: number;
  mes: number;

  constructor(private gastosService: GastosService, private router: Router) {}

  ngOnInit() {

    this.getResumenMes();

    this.listaAnho = anhos;
    
    this.selectorAnho = new Date().getFullYear();

    this.mes = new Date().getMonth();
  }

  getFecha(){
    this.getResumenMes();
  }  

  getResumenMes(): void{

    this.gastosService.getGastosResumen(this.selectorAnho).subscribe(z => {
      this.listaResumen = z
      
      z.forEach((v,k) =>{       
        let resumenChart: any[] = [];       

        v.elementos.forEach((mes,h) => {
          resumenChart.push({name: mes.entidad, value: mes.total });
        });

        this.listaResumen[k]['chart'] = resumenChart;
      });
    });
  }
}