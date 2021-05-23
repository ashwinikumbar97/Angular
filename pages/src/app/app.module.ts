import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { AppTimesDirective } from './app-times.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    AppTimesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
