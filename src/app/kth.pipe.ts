import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kth'
})
export class KthPipe implements PipeTransform {
  transform(value?: number): string {
    if (value) {
      if (value >= 1000) {
        return (value / 1000) + 'k';
      }

      return value.toString();
    }

    return '...';
  }
}
