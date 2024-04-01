import {
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCustomCursor]',
})
export class CustomCursorDirective implements OnInit {
  private cursorElement: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Create the cursor element
    this.cursorElement = this.renderer.createElement('div');
    this.renderer.setStyle(this.cursorElement, 'width', '15px');
    this.renderer.setStyle(this.cursorElement, 'height', '15px');
    this.renderer.setStyle(this.cursorElement, 'border-radius', '50%');
    this.renderer.setStyle(this.cursorElement, 'background-color', 'orange');
    this.renderer.setStyle(this.cursorElement, 'position', 'fixed');
    this.renderer.setStyle(this.cursorElement, 'z-index', '9999');
    this.renderer.setStyle(this.cursorElement, 'pointer-events', 'none');
    this.renderer.setStyle(
      this.cursorElement,
      'transform',
      'translate(-50%, -50%)'
    );
    this.renderer.setStyle(this.cursorElement, 'transition', 'all 0.1s ease');
    this.renderer.setStyle(this.cursorElement, 'opacity', '0');

    // Append the cursor element to the body
    this.renderer.appendChild(document.body, this.cursorElement);

    // Hide the default cursor
    this.renderer.setStyle(document.body, 'cursor', 'none');
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    // Update cursor position
    this.renderer.setStyle(this.cursorElement, 'left', `${event.clientX}px`);
    this.renderer.setStyle(this.cursorElement, 'top', `${event.clientY}px`);
  }

  @HostListener('mouseenter') onMouseEnter() {
    // Show the cursor
    this.renderer.setStyle(this.cursorElement, 'opacity', '1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Hide the cursor
    this.renderer.setStyle(this.cursorElement, 'opacity', '0');
  }
}
