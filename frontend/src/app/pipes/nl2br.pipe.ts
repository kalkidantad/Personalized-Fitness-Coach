import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nl2br'
})
export class Nl2brPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; // Handle null or undefined values
    return value.replace(/\n/g, '<br>'); // Replace newlines with <br> tags
  }
}