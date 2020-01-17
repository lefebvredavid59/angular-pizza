import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args);
    let before = args[0] || ''; // on verifie si la cle du tableau existe
    let after = args[1] || '';
    return before + value + after;
  }
}