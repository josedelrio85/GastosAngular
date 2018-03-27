import { Component, OnInit, Input } from '@angular/core';
import { TiposMovimiento } from '../../Modelos/TiposMovimiento';
import { TiposMovimientoService } from '../../services/tipos-movimiento-service.service';

@Component({
  selector: 'app-tipos-new',
  templateUrl: './tipos-new.component.html',
  styleUrls: ['./tipos-new.component.css']
})
export class TiposNewComponent implements OnInit {

  @Input() showMe: boolean;
  @Input() lista: TiposMovimiento[];
  item: TiposMovimiento;

  constructor(private httpService: TiposMovimientoService) { }

  ngOnInit() {
    this.item = new TiposMovimiento();
  }

  async save(){
    await this.httpService.addTipoMovimiento(this.item);
    this.httpService.getMaxId().subscribe(z => this.lista.push(z));
    this.showMe = false;
  }

}
