import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appTypingEffect]',
})
export class TypingEffectDirective implements OnInit, OnDestroy {
  @Input('appTypingEffect') text: string;
  private interval: any;
  private currentIndex: number = 0;
  private isInView: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', '');

    this.checkVisibility();
  }

  ngOnDestroy() {
    this.stopTyping();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkVisibility();
  }

  private checkVisibility() {
    if (this.isElementInViewport(this.elementRef.nativeElement)) {
      if (!this.isInView) {
        this.startTyping();
        this.isInView = true;
      }
    } else {
      this.isInView = false;
    }
  }

  private startTyping() {
    this.stopTyping();
    this.interval = setInterval(() => {
      this.typeNextCharacter();
    }, 200); // Adjust typing speed here
  }

  private stopTyping() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.currentIndex = 0;
    }
  }

  private typeNextCharacter() {
    if (this.currentIndex < this.text.length) {
      const currentText = this.text.substring(0, this.currentIndex + 1);
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'textContent',
        currentText
      );
      this.currentIndex++;
    } else {
      this.stopTyping();
    }
  }

  private isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
