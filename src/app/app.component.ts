import { Component, OnInit } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollEvent.subscribe((scrollOffset: number) => {
      this.updateActiveLink(scrollOffset);
    });
  }

  updateActiveLink(scrollOffset: number) {
    const sections = document.querySelectorAll('section');
    let currentSection: Element | null = null;

    // Find the section currently in view
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 50) {
        currentSection = section;
      }
    });

    // Update the active link based on the current section
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('routerLink');
      if (href && currentSection && currentSection.id === href.substring(1)) {
        link.classList.add('active');
      }
    });
  }
}
