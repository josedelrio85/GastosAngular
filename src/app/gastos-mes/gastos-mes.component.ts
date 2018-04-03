import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GastosComponent } from '../gastos/gastos.component';
import { Entidades } from '../Modelos/Entidades';
import { EntidadesService } from '../services/entidades-service.service';
import { Meses } from '../Modelos/meses.enum';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';
import { anhos } from '../Modelos/Global';

@Component({
  selector: 'app-gastos-mes',
  templateUrl: './gastos-mes.component.html',
  styleUrls: ['./gastos-mes.component.css']
})
export class GastosMesComponent extends GastosComponent implements OnInit {
  
  listaEntidades: Entidades[];
  listaAnho: any[] = [];
  meses = Meses;

  selectorMes: number;
  selectorAnho: number;

  fecha: string

  constructor(
    private gastosService: GastosService, 
    modalService: NgbModal, 
    private entidadesService: EntidadesService,
    private _activatedRoute: ActivatedRoute) { 

      super(gastosService, modalService);
  }


  ngOnInit() {
    this.listaAnho = anhos;
    
    this._activatedRoute.queryParams.subscribe(z => {
      if(!this.isEmptyObject(z)){
        this.selectorMes = Number(z.id);
        this.selectorAnho = Number(z.anho);
        this.fecha = z.anho + "-" + z.id;      
      }else{
        this.selectorMes = new Date().getMonth() + 1;
        this.selectorAnho = new Date().getFullYear();
        this.fecha = this.selectorAnho + "-" + this.selectorMes;
      }
    });

    super.getGastosMes(this.fecha);
    this.entidadesService.getEntidades().subscribe(z => { this.listaEntidades = z});;
  }

  getFecha(){
    this.fecha = this.selectorAnho + "-" + this.selectorMes;
    super.getGastosMes(this.fecha);
  }  


  isEmptyObject(obj) {
    for(var prop in obj) {
       if (obj.hasOwnProperty(prop)) {
          return false;
       }
    }
    return true;
  }

  onSorted($event){
    //console.log(event);
    if($event.sortColumn == "fecha"){
      this.ordenaFecha($event.sortDirection);
    }else if($event.sortColumn == "importe"){
      this.ordenaImporte($event.sortDirection);
    }
  }


  ordenaFecha(direccion: string){
    this.gastosService.getGastosMes(this.fecha).subscribe(z => {
      this.listaGastos = z;
      if(direccion === "asc"){
        this.listaGastos.sort((a,b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
      }else if(direccion === "desc"){
        this.listaGastos.sort((a,b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
      }
    })
  }

  ordenaImporte(sentido: string): void{
    this.gastosService.getGastosMes(this.fecha).subscribe(z => {
      this.listaGastos = z;
      if(sentido === "asc"){
        this.listaGastos.sort((a,b): any => {
          if(a.importe < b.importe) return -1;
          if(a.importe > b.importe) return 1;
          return 0;
        });
      }else if(sentido === "desc"){
        this.listaGastos.sort((a,b): any => {
          if(a.importe < b.importe) return 1;
          if(a.importe > b.importe) return -1;
          return 0;
        });
      }
    });
  }
  

}
