import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gastos } from '../Modelos/Gastos';
import { Entidades } from '../Modelos/Entidades';
import { TiposMovimiento } from '../Modelos/TiposMovimiento';
import { GastosService } from '../services/gastos-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-csv-process',
  templateUrl: './csv-process.component.html',
  styleUrls: ['./csv-process.component.css']
})
export class CsvProcessComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
  private httpService: GastosService,
  private datePipe: DatePipe) { }

  createForm(){
    this.form = this.fb.group({
      archivo: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createForm();
  }
  
  listaGastos: Gastos[] = [];

  onFileChange(event){
    
    if(event.target.files.length > 0){
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = (readerEvt: any) => {
        let data: any = reader.result;
        let allTextLines = data.split(/\r\n|\n/);
        let headers = allTextLines[0].split(',');
        let lines = [];

        for(let i = 1; i < allTextLines.length - 1; i++){
          let fila = allTextLines[i].split(';');
          //console.log(fila);
          let z = new Gastos();
          z.fecha = this.formateaFecha(fila[0]);
          z.descripcion = fila[2];        
          z.activo = 1;
          z.importe = this.formateaImporte(fila[3]);

          (!this.importeNegativo(fila[3])) ? z.idTipoMovimiento = 2 : z.idTipoMovimiento = 1;               
          z.idEntidad = this.clasificaMovimiento(fila[2]);

          this.listaGastos.push(z);
        }
        //console.log(this.listaGastos);
        this.guardaMovimientos(this.listaGastos);
      }
    }
    
  }

  async guardaMovimientos(lista: Gastos[]){
    for(let i = 0; i < lista.length; i++){
      await this.httpService.addGasto(lista[i]);
    }
  }

  formateaFecha(f: string): Date{
    let desmontada = f.split('-');
    if(desmontada.length == 1){
      desmontada = f.split('/');
    }
    let fechaMontada = desmontada[2]+"-"+desmontada[1]+"-"+desmontada[0];
    return new Date(fechaMontada);
  }

  importeNegativo(valor: any): boolean{
    if(String(valor).startsWith('-')){
      return true;
    }
    return false;
  }


  formateaImporte(valor: any): number{
    let a: String = '0';
    if(valor != undefined){
      if(this.importeNegativo(valor)){
        a = String(valor).replace('-','');   
      }else{
        //considero las entradas como negativas, corrección realizada despues del planteamiento inicial
        valor = valor * -1;
        if(valor.length > 6){
          a = String(valor).replace('.','');    
        }else{
          a = valor;
        }
      }    
      a = a.replace(',','.');  
    }
    return Number(a);
  }

  clasificaMovimiento(valor: any): number{
    let desc: string = String(valor);
    
    if(desc.startsWith('OSP201801OC0'))
      return 1;  //internet

    if(desc.startsWith('00000025'))
      return 4;  //comunidad
    
    if(desc.startsWith('COTA 0000551'))
      return 6;  //comunidad
    
    if(desc.startsWith('71796851'))
      return 7;  //electricidad

    if(desc.startsWith('5DYJ224NJRQF'))
      return 10; //varios paypal
    
    if(desc.startsWith('064000042039'))
      return 11; //peajes
    
    if(desc.startsWith('SUMINISTROS INFORMATICOS'))
      return 12; //nomina
      
    if(desc.startsWith('767000965196 ')){
      if(desc.includes('REINTEGRO')){
        return 3;  //metalico
      }else if(desc.includes("EROSKI")){
        return 5; //supermercado
      }else if(desc.includes("HBO")){
        return 8;
      }else if(desc.includes('E.S.')){
        return 9; //gasolina        
      }else{
        return 10;
      }
    }

    if(desc.startsWith("000001090156"))
      return 13;
    
    if(desc.startsWith("665932355"))
      return 14;

    return 10;
  }
}