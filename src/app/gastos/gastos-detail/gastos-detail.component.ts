import { Component, OnInit, Input, NgModule } from '@angular/core';
import { GastosService } from '../../services/gastos-service.service';
import { TiposMovimientoService } from '../../services/tipos-movimiento-service.service';
import { TiposMovimiento } from '../../Modelos/TiposMovimiento';
import { EntidadesService } from '../../services/entidades-service.service';
import { Entidades } from '../../Modelos/Entidades';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Gastos } from '../../Modelos/Gastos';

// @NgModule({
//   providers: [
//     {provide: OWL_DATE_TIME_LOCALE, useValue: 'es'},
//   ],
// })

@Component({
  selector: 'app-gastos-detail',
  templateUrl: './gastos-detail.component.html',
  styleUrls: ['./gastos-detail.component.css']
})

export class GastosDetailComponent implements OnInit {
    
  item: Gastos;
  
  listaTipos: TiposMovimiento[];
  listaEntidades: Entidades[];

  constructor(private httpService: GastosService,
    private httpTiposService: TiposMovimientoService,
    private httpEntidadesService: EntidadesService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.getTiposMovimiento();
    this.getEntidades();
  }

  update(): void{
    this.httpService.updateGasto(this.item);
    this.activeModal.close();
  }

  getTiposMovimiento(): void{
    this.httpTiposService.getTiposMovimiento().subscribe(z => this.listaTipos = z);
  }

  getEntidades(): void{
    this.httpEntidadesService.getEntidades().subscribe(z => this.listaEntidades = z);
  }

  cierraModal(){
    this.activeModal.close();
  }
}
