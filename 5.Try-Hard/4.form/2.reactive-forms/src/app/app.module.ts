import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameEdittorComponent } from './name-edittor/name-edittor.component';
import { NameProfileEditerComponent } from './name-profile-editer/name-profile-editer.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEdittorComponent,
    NameProfileEditerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
