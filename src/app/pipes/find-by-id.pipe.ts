import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findById'
})
export class FindByIdPipe implements PipeTransform {

  transform(value: Array<any>, args: number): any {
    if (!value) return null;
    if (!args) return null;

    let valor = value.find(v => v.id == args);
    return valor;
  }

}
