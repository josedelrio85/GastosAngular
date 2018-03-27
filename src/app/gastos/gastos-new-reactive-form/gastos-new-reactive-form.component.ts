import { Component, OnInit, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GastosService } from '../../services/gastos-service.service';
import { Gastos } from '../../Modelos/Gastos';
import { TiposMovimientoService } from '../../services/tipos-movimiento-service.service';
import { EntidadesService } from '../../services/entidades-service.service';
import { TiposMovimiento } from '../../Modelos/TiposMovimiento';
import { Entidades } from '../../Modelos/Entidades';
import { ValidateAllFormFieldsService } from '../../services/validate-all-form-fields.service';

@Component({
  selector: 'app-gastos-new-reactive-form',
  templateUrl: './gastos-new-reactive-form.component.html',
  styleUrls: ['./gastos-new-reactive-form.component.css']
})
export class GastosNewReactiveFormComponent implements OnInit {

  form: FormGroup;
  private formSumitAttempt: boolean;

  @Input() lista;
  @Input() showMe;
  item: Gastos;
  listaTipos: TiposMovimiento[];
  listaEntidades: Entidades[];

  
  @Output()
  showMeChild: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private fb: FormBuilder,
            private httpService: GastosService,
            private httpTiposService: TiposMovimientoService,
            private httpEntidadesService: EntidadesService,
            private validateFields: ValidateAllFormFieldsService) { 
  }

  createForm(){
    this.form = this.fb.group({
      importe: ['', Validators.required],
      fecha: ['', Validators.required],
      idEntidad: ['', Validators.required],
      idTipoMovimiento: [1, Validators.required],
      activo: [''],
      descripcion: ['']
    });
  }


  ngOnInit() {
    this.item = new Gastos();
    this.item.idTipoMovimiento = 1;
    this.getTiposMovimiento();
    this.getEntidades();

    this.createForm();
    
  }

  //logica validacion campos formulario
  isFieldValid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSumitAttempt)
    );
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }


  formToObject(): void{
    let objeto: Gastos = new Gastos();

    let a: Date = this.form.value['fecha'];
    objeto.fecha = a;

    this.form.value['activo'] == true ? objeto.activo = 1 : objeto.activo = 0;
    // this.form.value['fijo'] == true ? objeto.fijo = 1 : objeto.fijo = 0;

    objeto.idEntidad = this.form.value['idEntidad'];
    objeto.idTipoMovimiento = this.form.value['idTipoMovimiento'];
    objeto.importe = this.form.value['importe'];
    objeto.descripcion = this.form.value['descripcion'];
  
    this.item = objeto;
  }

  onSubmit(){
    if(this.form.valid){
      this.formToObject();
      this.save();
    }else{
      this.validateFields.validateAllFormFields(this.form);
    }
  }

  async save(){
    await this.httpService.addGasto(this.item);
    this.httpService.getMaxId().subscribe(z =>{
      this.lista.push(z)
    } );
    this.showMe = false;    
    this.showMeChild.emit(this.showMe);
    this.form.reset();
  }

  getTiposMovimiento(): void{
    this.httpTiposService.getTiposMovimiento().subscribe(z => this.listaTipos = z);
  }

  getEntidades(): void{
    this.httpEntidadesService.getEntidades().subscribe(z => this.listaEntidades = z);
  }


}
