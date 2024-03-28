import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomCursor]',
})
export class CustomCursorDirective {
  cursorElement: HTMLDivElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.cursorElement = this.renderer.createElement('div');
    this.renderer.addClass(this.cursorElement, 'cursor');
    this.renderer.appendChild(document.body, this.cursorElement);
    this.hideDefaultCursor();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.moveCursor(event);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showCursor();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hideCursor();
  }

  moveCursor(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    this.renderer.setStyle(this.cursorElement, 'top', `${y}px`);
    this.renderer.setStyle(this.cursorElement, 'left', `${x}px`);
  }

  showCursor() {
    this.renderer.setStyle(this.cursorElement, 'opacity', '1');
  }

  hideCursor() {
    this.renderer.setStyle(this.cursorElement, 'opacity', '0');
  }

  hideDefaultCursor() {
    this.renderer.setStyle(document.body, 'cursor', 'none');
  }
}
