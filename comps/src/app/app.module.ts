import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    AppComponent
  ],  // list of all the components ,pipes ,directives that is created in this module
  imports: [
    BrowserModule,
    AppRoutingModule
  ], // list of other dependency modules
  //exports: []  // list of comp, pipe,dir .. that this module makes avilable to other module
  providers: [],  // old way of connecting modules +service  ignore
  bootstrap: [AppComponent] //  which compoent is displayed 1st
})
export class AppModule { }
