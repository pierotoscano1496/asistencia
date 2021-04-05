import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findByField'
})
export class FindByFieldPipe implements PipeTransform {

  transform(value: Array<any>, fieldName: string, valueToFind: string | number): any {
    if (!value) return null;
    if (!fieldName) return null;
    if (!valueToFind) return null;

    let valor = value.find(v => v[fieldName] == valueToFind);
    return valor;
  }

}
