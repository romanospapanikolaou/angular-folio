import { Injectable, HostListener, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollEvent = new EventEmitter<number>();

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.scrollEvent.emit(scrollOffset);
  }
}
