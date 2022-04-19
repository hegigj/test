import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAge]'
})
export class AgeDirective {
  @Input('appAge')
  set birthDate(value: string | undefined) {
    if (value) {
      const birthDate: Date = new Date(value);
      const age: number = 2022 - birthDate.getFullYear();
      const style: any = this.el.nativeElement.style;

      if (age > 18) {
        style.color = 'red';
      } else {
        style.color = 'green';
      }
    }
  }

  constructor(private el: ElementRef) { }
}
