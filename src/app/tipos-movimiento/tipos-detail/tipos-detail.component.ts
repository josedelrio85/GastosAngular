import { Component, OnInit, Input } from '@angular/core';
import { TiposMovimiento } from '../../Modelos/TiposMovimiento';
import { TiposMovimientoService } from '../../services/tipos-movimiento-service.service';

@Component({
  selector: 'app-tipos-detail',
  templateUrl: './tipos-detail.component.html',
  styleUrls: ['./tipos-detail.component.css']
})
export class TiposDetailComponent implements OnInit {

  @Input() item: TiposMovimiento;
  @Input() showMe: boolean;

  constructor(private tiposMovimientoService: TiposMovimientoService) { }

  ngOnInit() {
  }

  update(): void{
    this.tiposMovimientoService.updateTipoMovimiento(this.item);
    this.showMe = !this.showMe;
  }
}
