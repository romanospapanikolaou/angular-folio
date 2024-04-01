import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLinkHoverAnimation]',
})
export class LinkHoverAnimationDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hoverAnimation(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hoverAnimation(false);
  }

  private hoverAnimation(isHovered: boolean) {
    const scale = isHovered ? 1.2 : 1;
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `scale(${scale})`
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'transform 0.3s ease'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'cursor',
      isHovered ? 'none' : 'auto'
    );
  }
}
