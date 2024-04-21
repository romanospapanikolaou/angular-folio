import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollRight]',
})
export class ScrollRightDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY;
    this.renderer.setStyle(
      this.el.nativeElement,
      'margin-left',
      `${scrollPosition}px`
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
      max-width: 1200px;
      margin: 20px auto;
      padding: 20px;
    }
  `,
  ];
}
