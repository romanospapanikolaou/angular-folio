import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveLink]',
})
export class ActiveLinkDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section: HTMLElement) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition <= section.offsetTop + section.offsetHeight
      ) {
        this.activateLink(section.id);
      }
    });
  }

  activateLink(id: string): void {
    const links = document.querySelectorAll('.nav-link');

    links.forEach((link: HTMLElement) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
      }
    });
  }
}
