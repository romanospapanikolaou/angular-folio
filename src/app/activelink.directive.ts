import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appActiveLink]',
})
export class ActiveLinkDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Set 'active' class explicitly on the 'home' link during initialization
    if (this.el.nativeElement.getAttribute('section-id') === 'home') {
      this.el.nativeElement.classList.add('active');
    }
  }

  @HostListener('click') onClick() {
    this.setActiveClass();
    this.scrollToSection();
  }

  private setActiveClass() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    this.el.nativeElement.classList.add('active');
  }

  private scrollToSection() {
    const sectionId = this.el.nativeElement.getAttribute('section-id');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
