import { Component, OnInit } from '@angular/core';
import { EntidadesService } from '../services/entidades-service.service';
import { Entidades } from '../modelos/Entidades';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EntidadesDetailComponent } from './entidades-detail/entidades-detail.component';


@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent implements OnInit {

  selectedItem: Entidades;
  listaEntidades: Entidades[];

  showDetail = true;
  showNew = false;

  constructor(private httpService: EntidadesService,private modalService: NgbModal) { }

  ngOnInit() {
    this.getEntidades();
  }

  getEntidades(): void{
    this.httpService.getEntidades().subscribe(z => this.listaEntidades = z);
  }

  delete(item: Entidades): void{
    let index = this.listaEntidades.indexOf(item);
    this.httpService.deleteEntidad(item.id).subscribe(z => this.listaEntidades.splice(index, 1))
  }

  openDetail(item: Entidades): void {
    this.selectedItem = item;
    const modalRef = this.modalService.open(EntidadesDetailComponent);
    modalRef.componentInstance.item = this.selectedItem;
  }

  open(content, item: Entidades) {
    this.selectedItem = item;
    this.modalService.open(content).result.then();
  }

  toogleChild(): void{
    this.showNew = !this.showNew;
    this.showDetail = true;
  }
}
