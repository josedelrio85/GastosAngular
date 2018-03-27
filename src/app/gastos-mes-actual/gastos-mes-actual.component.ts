import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos-service.service';
import { Gastos } from '../Modelos/Gastos';
import { Entidades } from '../Modelos/Entidades';
import { EntidadesService } from '../services/entidades-service.service';

@Component({
  selector: 'app-gastos-mes-actual',
  templateUrl: './gastos-mes-actual.component.html',
  styleUrls: ['./gastos-mes-actual.component.css']
})
export class GastosMesActualComponent implements OnInit {

  listaGastos: Gastos[];
  listaEntidades: Entidades[];
  mesActual: number;

  constructor(private httpService: GastosService,
              private entidadesService: EntidadesService) { }

  ngOnInit() {
    this.getGastosMesSiguiente();
    this.entidadesService.getEntidades().subscribe(z => { this.listaEntidades = z});;
    
    this.mesActual = new Date().getMonth() + 2;
  }

  getGastosMesSiguiente() {
    this.httpService.getGastosMesSiguiente().subscribe(z => this.listaGastos = z);
  }

}
