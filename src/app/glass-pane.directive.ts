import {
  Directive,
  HostBinding,
  HostListener,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appGlassPane]',
})
export class GlassPaneDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    // Add initial styles to the element
    this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none'); // Allows clicks to pass through
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'filter 0.3s ease-out'
    ); // Optional: Add a transition for a smoother effect
    this.renderer.setStyle(
      this.el.nativeElement,
      'background',
      'rgba(255, 255, 255, 0)'
    );
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'blur(0)');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Adjust these values based on your design
    const blurAmount = scrollPosition / 70;

    this.renderer.setStyle(
      this.el.nativeElement,
      'filter',
      `blur(${blurAmount}px)`
    );
  }
}
