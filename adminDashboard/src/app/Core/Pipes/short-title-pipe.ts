import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortTitle',
})
export class ShortTitlePipe implements PipeTransform {

  transform(value: string, wordCount: number = 3): string {
    // handle empty value
    if (!value) return '';

    // split title into words and take first N words
    const words = value.split(' ');  
    const shortened = words.slice(0, wordCount).join(' ');
    return words.length > wordCount ? shortened + '...' : shortened;
  }

}
