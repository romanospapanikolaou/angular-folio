import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomCursorDirective } from './custom-cursor.directive';
import { ScrollRightDirective } from './scroll-right.directive';
import { ScrollLeftDirective } from './scroll-left.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    CustomCursorDirective,
    ScrollRightDirective,
    ScrollLeftDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
