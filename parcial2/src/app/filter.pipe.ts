import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value, search): unknown {

    if(value.length == 0 || !search) return value;

    return value.filter(v => v.type.toLowerCase() == search.toLowerCase());
  }

}
