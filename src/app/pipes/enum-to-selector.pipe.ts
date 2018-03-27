import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToSelector'
})
export class EnumToSelectorPipe implements PipeTransform {

  transform(enumerador: Array<any>, args?: any): Array<any> {
    
    let a = Object.keys(enumerador).map(key => ({ indice: enumerador[key], valor: key}));
    a = a.slice(a.length / 2);
    return a;
  }

}
