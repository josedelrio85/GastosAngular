import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { TiposMovimientoService } from '../services/tipos-movimiento-service.service';
import { TiposMovimiento } from '../Modelos/TiposMovimiento';

@Component({
  selector: 'app-tipos-movimiento',
  templateUrl: './tipos-movimiento.component.html',
  styleUrls: ['./tipos-movimiento.component.css']
})
export class TiposMovimientoComponent implements OnInit {

  selectedTipo: TiposMovimiento;
  listaTipos: TiposMovimiento[];

  showDetail = true;
  showNew = false;
  
  constructor(private tiposMovimientoService: TiposMovimientoService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getTiposMovimiento();
  }

  getTiposMovimiento(): void{
    this.tiposMovimientoService.getTiposMovimiento()
      .subscribe(z => this.listaTipos = z);    
  }

  delete(item: TiposMovimiento): void{
    const index = this.listaTipos.indexOf(item);
    this.tiposMovimientoService.deleteTipoMovimiento(item.id)
      .subscribe(z => {
        this.listaTipos.splice(index, 1);
      });
  }

  onSelect(item: TiposMovimiento): void{
    this.selectedTipo = item;
    this.showDetail = !this.showDetail;
    this.showNew = false;
  }

  toogleChild(): void {
    this.showNew = !this.showNew;
    this.showDetail = true;
  }

  open(content, item: TiposMovimiento) {
    this.selectedTipo = item;
    this.modalService.open(content).result.then();
  }
}
