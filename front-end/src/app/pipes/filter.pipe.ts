import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: any[], chercher: any): any[] {
    return array.filter((element) =>
      element.titre.toLowerCase().includes(chercher.toLowerCase())
    );
  }
}
