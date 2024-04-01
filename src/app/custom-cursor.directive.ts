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
  private outerCursorElement: HTMLElement;

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

    // Create the outer cursor element (bigger circle)
    this.outerCursorElement = this.renderer.createElement('div');
    this.renderer.setStyle(this.outerCursorElement, 'width', '85px');
    this.renderer.setStyle(this.outerCursorElement, 'height', '85px');
    this.renderer.setStyle(
      this.outerCursorElement,
      'border',
      '3px solid orange'
    );
    this.renderer.setStyle(this.outerCursorElement, 'border-radius', '50%');
    this.renderer.setStyle(this.outerCursorElement, 'position', 'fixed');
    this.renderer.setStyle(this.outerCursorElement, 'z-index', '9998');
    this.renderer.setStyle(this.outerCursorElement, 'pointer-events', 'none');
    this.renderer.setStyle(
      this.outerCursorElement,
      'transform',
      'translate(-50%, -50%)'
    );
    this.renderer.setStyle(
      this.outerCursorElement,
      'transition',
      'all 0.1s ease'
    );
    this.renderer.setStyle(this.outerCursorElement, 'opacity', '0');

    // Append the cursor elements to the body
    this.renderer.appendChild(document.body, this.outerCursorElement);
    this.renderer.appendChild(document.body, this.cursorElement);

    // Hide the default cursor
    this.renderer.setStyle(document.body, 'cursor', 'none');
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    // Update cursor positions with a small delay
    setTimeout(() => {
      this.renderer.setStyle(
        this.outerCursorElement,
        'left',
        `${event.clientX}px`
      );
      this.renderer.setStyle(
        this.outerCursorElement,
        'top',
        `${event.clientY}px`
      );
    }, 100); // Adjust the delay as needed

    this.renderer.setStyle(this.cursorElement, 'left', `${event.clientX}px`);
    this.renderer.setStyle(this.cursorElement, 'top', `${event.clientY}px`);
  }

  @HostListener('mouseenter') onMouseEnter() {
    // Show the cursor
    this.renderer.setStyle(this.outerCursorElement, 'opacity', '1');
    this.renderer.setStyle(this.cursorElement, 'opacity', '1');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Hide the cursor
    this.renderer.setStyle(this.outerCursorElement, 'opacity', '0');
    this.renderer.setStyle(this.cursorElement, 'opacity', '0');
  }
}
