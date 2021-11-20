import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension',
})
export class ExtensionPipe implements PipeTransform {
  transform(ch: string, ext: string, type: string): any {
    return ch + '.' + ext + ' type : ' + type;
  }
}
