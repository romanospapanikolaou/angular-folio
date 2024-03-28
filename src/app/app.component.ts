import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isMouseMoving = false;

  onMouseMove(event: MouseEvent): void {
    this.isMouseMoving = true;
    const mouseCursor = document.querySelector('.mouse-cursor') as HTMLElement;
    mouseCursor.style.left = `${event.clientX}px`;
    mouseCursor.style.top = `${event.clientY}px`;
  }
}
