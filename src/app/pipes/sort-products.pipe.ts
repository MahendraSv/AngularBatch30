import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if (!args) {
      return value;
    }
    let results = [];
    if (args === 'productName') {
      results = value.sort(function(a, b) {
        return a.productName < b.productName ? 1 : -1;
      });
    }
    return value;
  }

}
