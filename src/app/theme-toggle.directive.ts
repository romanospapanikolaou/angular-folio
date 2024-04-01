import { Directive, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appThemeToggle]',
})
export class ThemeToggleDirective {
  isDarkTheme: boolean = false;

  constructor(private renderer: Renderer2) {
    this.toggleTheme(); // Initially apply the default theme
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.toggleTheme();
  }
}
