import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  iconSrc: string = 'https://img.icons8.com/pulsar-gradient/48/moon-symbol.png';

  changeIcon() {
    if (this.iconSrc.includes('moon-symbol.png')) {
      this.iconSrc = 'https://img.icons8.com/office/48/sun.png';
    } else {
      this.iconSrc =
        'https://img.icons8.com/pulsar-gradient/48/moon-symbol.png';
    }
  }
}
