import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSymbols'
})
export class ReplaceSymbolsPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/\*/g, '').replace(/#/g, ''); // Remove * and #
  }
}