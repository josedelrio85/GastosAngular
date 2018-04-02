import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gasto-edit',
  templateUrl: './gasto-edit.component.html',
  styleUrls: ['./gasto-edit.component.css']
})
export class GastoEditComponent implements OnInit {

  @Input() item;
  
  @Input() listaTipos;
  @Input() listaEntidades;

  constructor() { }

  ngOnInit() {
  }


  checkToNumber(){
    this.item.activo == 0 ? this.item.activo = 1 : this.item.activo = 0;
  }
}
