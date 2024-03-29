import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollLeft]',
})
export class ScrollLeftDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY;
    this.renderer.setStyle(
      this.el.nativeElement,
      'margin-left',
      `-${scrollPosition}px`
    );
  }

  static styles = [
    `
    :host {
      position: relative;
      white-space: nowrap;
      overflow-x: hidden;
    }

    :host > * {
      max-width: 800px; /* Adjust as needed */
      margin: 20px auto; /* Adjust as needed */
      padding: 20px;
      border: 1px solid #ccc;
      background-color: #f9f9f9;
    }
  `,
  ];
}
