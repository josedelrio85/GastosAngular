import { Component, OnInit } from '@angular/core';
import { Meses } from '../Modelos/meses.enum';
import { EntidadesService } from '../services/entidades-service.service';
import { Entidades } from '../Modelos/Entidades';
import { Gastos } from '../Modelos/Gastos';
import { TiposMovimiento } from '../Modelos/TiposMovimiento';
import { TiposMovimientoService } from '../services/tipos-movimiento-service.service';
import { FijosMesService } from '../services/fijos-mes.service';
import { Observable } from 'rxjs/Observable';
import { GastosService } from '../services/gastos-service.service';

@Component({
  selector: 'app-config-fijos-mes',
  templateUrl: './config-fijos-mes.component.html',
  styleUrls: ['./config-fijos-mes.component.css']
})
export class ConfigFijosMesComponent implements OnInit {
  meses = Meses;
  selectorMes: number;
  listaEntidades: Entidades[];
  selectorEntidades: any[];
  listaTipos: TiposMovimiento[];
  listaFijos: Gastos[];  
  idsActivos: number[];
  listaFijosActivos: Gastos[];
  g: Gastos;

  constructor(private entidadesService: EntidadesService,
  private tiposService: TiposMovimientoService,
  private fijosMesService: FijosMesService,
  private gastosService: GastosService) {}

  ngOnInit() {
    this.idsActivos = [];
    this.listaFijosActivos = [];
  }

  muestraListaEntidades(){
    this.entidadesService.getEntidades().subscribe(z => this.listaEntidades = z);
    let mes = Number(this.selectorMes.toString());
    this.fijosMesService.getFijosMesByMes(mes).subscribe(z => {
      this.listaFijosActivos = z;
    });
  }

  editaGastosFijosMes(){
    this.listaFijos =  [];
    if(this.selectorEntidades.length > 0){
      let f2: Date = new Date(new Date().getFullYear().toString()+ "-" + this.selectorMes.toString() + "-01");
      
      this.selectorEntidades.forEach((v,k) => {
        let g = new Gastos();
        g.fecha = f2;
        g.importe = 0;
        g.activo = 0;
        g.idEntidad = v;
        g.idTipoMovimiento = 1;
        g.descripcion = '';

        this.listaFijos.push(g);
      });
      this.tiposService.getTiposMovimiento().subscribe(z => this.listaTipos = z);
    }
  }

  onSubmit(){
    if(this.listaFijos.length > 0){
      for(let i = 0; i < this.listaFijos.length; i++){
        this.fijosMesService.add(this.listaFijos[i])
        .catch( error => {
          this.idsActivos.push(this.listaFijos[i].idEntidad);
          this.g = this.listaFijos[i];
          return Observable.of({description: "Se ha producido un error"});
        })
        .subscribe( (z) => {
          // (val) => {console.log("POST call successful value returned in body", val);}
          if(this.g != this.listaFijos[i]){
            this.gastosService.addGasto(this.listaFijos[i]);
          }
        });
      }
    }
  }

  delete(item: any){
    this.fijosMesService.delete(item).subscribe(z =>{
      let index = this.listaFijosActivos.indexOf(item);
      this.listaFijosActivos.splice(index,1);
    });   
  }
} 