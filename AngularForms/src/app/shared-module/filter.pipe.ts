import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
    case 1:
    return 'One';
    case 2:
    return 'Two';
    default :
    return "None";
    }
    }
}
