import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(value: any[], args?: String): any {

    if (!args) {
      return value;
    }
    // const result = value.filter(function(p123) {
    //   return p123.productName.toLowerCase().indexOf(args.toLowerCase()) > -1;
    // });

    let result = [];
    // for (let i = 0; i < value.length; i ++) {
    //   if (value[i].productName.toLowerCase().indexOf(args.toLocaleLowerCase()) > -1) {
    //     result.push(value[i]);
    //   }
    // }

    value.forEach(function(p) {
      if (p.productName.toLowerCase().indexOf(args.toLocaleLowerCase()) > -1) {
        result.push(p);
      }
    });

    return result;
  }

}
