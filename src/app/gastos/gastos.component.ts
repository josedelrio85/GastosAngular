import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos-service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Gastos } from '../Modelos/Gastos';
import { GastosDetailComponent } from './gastos-detail/gastos-detail.component';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css'],
})

export class GastosComponent implements OnInit {

  selectedItem: Gastos;
  listaGastos: Gastos[];

  showNew: boolean;
  showDetail: boolean = false;

  constructor(private httpService: GastosService, private modalService: NgbModal) {}

  ngOnInit() {
    this.getGastos();
  }
  rm: number = 15;
  lista: Gastos[];
  listaAux: Gastos[];
  siguienteMuestra: number = 0;

  getGastos(): void{
    this.httpService.getGastos().subscribe(z => {
      
      this.lista = z;

      if(this.rm < this.lista.length){
        this.listaGastos = z.slice(0, this.rm);
        this.siguienteMuestra = this.rm;
      }else{
        this.listaGastos = z.slice(0, this.lista.length);
      }
    });
  }

  onScrollDown () {
    if(this.siguienteMuestra < this.lista.length){
      this.siguienteMuestra += this.rm;
      this.listaAux = this.lista.slice(this.listaGastos.length, this.siguienteMuestra);
      this.listaGastos = this.listaGastos.concat(this.listaAux);
    }else{
      this.listaAux = this.lista.slice(this.listaGastos.length, this.lista.length);      
      this.listaGastos = this.listaGastos.concat(this.listaAux);
    }
  }

  
  getGastosMes(fecha: string): void{
    this.httpService.getGastosMes(fecha).subscribe(z => this.listaGastos = z);
  }

  delete(item: Gastos): void{
    let index = this.listaGastos.indexOf(item);
    this.httpService.deleteGasto(item.id).subscribe(z => this.listaGastos.splice(index, 1))
  }

  toogleChild(): void{
    this.showNew = !this.showNew;
    this.showDetail = false;
  }

  open(content, item: Gastos) {
    this.selectedItem = item;

    this.modalService.open(content).result.then(
      (result) => {}, 
      (reason) => {}
    );
  }

  openDetail(item: Gastos){
    this.selectedItem = item;
    const modalRef = this.modalService.open(GastosDetailComponent);
    modalRef.componentInstance.item = this.selectedItem;
  }

  escuchaEstadoHijo(estado){
    this.showNew = estado;
  }

  getGastosByFecha(sentido: string): void{
    this.httpService.getGastos().subscribe(z => {
      this.listaGastos = z;
      if(sentido === "asc"){
        this.listaGastos.sort((a,b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
      }else if(sentido === "desc"){
        this.listaGastos.sort((a,b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())        
      }
    });
  }

  getGastosByImporte(sentido: string): void{
    this.httpService.getGastos().subscribe(z => {
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

  getGastosByEntidad(sentido: string): void{
    this.httpService.getGastos().subscribe(z => {
      this.listaGastos = z;
      if(sentido === "asc"){
        this.listaGastos.sort((a,b): any => {
          if(a.idEntidad < b.idEntidad) return -1;
          if(a.idEntidad > b.idEntidad) return 1;
          return 0;
        });
      }else if(sentido === "desc"){
        this.listaGastos.sort((a,b): any => {
          if(a.idEntidad < b.idEntidad) return 1;
          if(a.idEntidad > b.idEntidad) return -1;
          return 0;
        });
      }
    });
  }


  onSorted($event){
    // console.log("5 -> GastosComponent onSorted: Se recibe contenido emitido por SortService, asignado a sorted (Ouput) en el proceso de escucha ");
    //console.log($event.sortColumn);    
    if($event.sortColumn == "fecha"){
      this.getGastosByFecha($event.sortDirection);
    }

    if($event.sortColumn == "importe"){
      this.getGastosByImporte($event.sortDirection);
    }

    if($event.sortColumn == "idEntidad"){
      this.getGastosByEntidad($event.sortDirection);
    }
  }
}
