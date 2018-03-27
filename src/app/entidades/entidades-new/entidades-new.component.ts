import { Component, OnInit, Input } from '@angular/core';
import { EntidadesService } from '../../services/entidades-service.service';
import { Entidades } from '../../Modelos/Entidades';

@Component({
  selector: 'app-entidades-new',
  templateUrl: './entidades-new.component.html',
  styleUrls: ['./entidades-new.component.css']
})
export class EntidadesNewComponent implements OnInit {

  @Input() lista;
  @Input() showMe;
  item: Entidades;

  constructor(private httpService: EntidadesService) { }

  ngOnInit() {
    this.item = new Entidades();
  }

  async save(){
    await this.httpService.addEntidad(this.item);
    this.httpService.getMaxId().subscribe(z => this.lista.push(z));
    this.showMe = false;    
  }

}
