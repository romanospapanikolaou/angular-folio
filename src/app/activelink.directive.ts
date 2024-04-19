import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appActiveLink]',
})
export class ActiveLinkDirective implements OnInit {
  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.setActiveClassOnScroll();
  }

  @HostListener('click') onClick() {
    const sectionId = this.el.nativeElement.getAttribute('section-id');
    this.setActiveClass();
    this.scrollToSection(sectionId);
    this.updateUrl(sectionId);
  }

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    this.setActiveClassOnScroll();
  }

  private setActiveClassOnScroll() {
    const sectionId = this.el.nativeElement.getAttribute('section-id');
    const element = document.getElementById(sectionId);
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop >= 0 && elementTop <= windowHeight) {
      this.setActiveClass();
      this.updateUrl(sectionId);
    }
  }

  private setActiveClass() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    this.el.nativeElement.classList.add('active');
  }

  private scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private updateUrl(sectionId: string) {
    const currentUrl = this.router.url;
    const newUrl = currentUrl.split('#')[0] + '#' + sectionId;
    this.router.navigateByUrl(newUrl);
  }
}
