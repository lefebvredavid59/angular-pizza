import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pizza'
})
export class PizzaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let tax = args[0] || 5.5;
    let result = value * (1 + tax /100)
    return result.toFixed(2).replace('.',',')+'€';
  }
}