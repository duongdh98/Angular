import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialPagesComponent } from './material-pages/material-pages.component';
import { AutoCompleteComponent } from './material-pages/auto-complete/auto-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialPagesComponent,
    AutoCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
