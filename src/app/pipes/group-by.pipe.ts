import { Pipe, PipeTransform } from '@angular/core';
import { Gastos } from '../Modelos/Gastos';

@Pipe({
  name: 'groupBy'
})

//{{2 | exponentialStrength: 10}}
//{{elementoSobreElQueSeAplicaLaPipe | nombrePipe: parametro(s)Entrada}}
//*ngFor="let u of listaGastos" -> let u of listaGastos | groupBy: <parametro> : <valor>

export class GroupByPipe implements PipeTransform {

  transform(coleccion: Array<any>, parametro: string, valor: number): Array<any> {
    if(!coleccion){
      return null;
    }
    
    let salida: any[] = [];
    let sumador: number = 0;
    for(let g of coleccion){     
      if(g[parametro] == valor){
        salida.push(g);
        sumador += g['importe'];
      }
    }

    salida.push({id:0, importe: sumador, activo: 0, fijo:0, idEntidad:99, idTipoMovimiento: 1, descripcion: 'TOTAL'});

    return salida;

  }
}