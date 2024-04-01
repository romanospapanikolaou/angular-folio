// update-year.directive.ts

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpdateYear]',
})
export class UpdateYearDirective {
  constructor(private elementRef: ElementRef) {
    const currentYear = new Date().getFullYear();
    this.elementRef.nativeElement.textContent = currentYear;
  }
}
