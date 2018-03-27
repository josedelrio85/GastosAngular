import { Pipe, PipeTransform } from '@angular/core';
import { Meses } from '../Modelos/meses.enum';

@Pipe({
  name: 'numberToMonth'
})
export class NumberToMonthPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return Meses[value];
  }

}
