import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultat',
})
export class ResultatPipe implements PipeTransform {
  transform(array: any[], chercher: any): any[] {
    return array.filter(
      (element) =>
        element.nom.toLowerCase().includes(chercher.toLowerCase()) ||
        element.prenom.toLowerCase().includes(chercher.toLowerCase())
    );
  }
}
