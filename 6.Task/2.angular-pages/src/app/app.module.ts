import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularPageComponent } from './angular-page/angular-page.component';
import { AngularHeaderComponent } from './angular-page/angular-header/angular-header.component';
import { AngularMiddleComponent } from './angular-page/angular-middle/angular-middle.component';
import { AngularFooterComponent } from './angular-page/angular-footer/angular-footer.component';
import { MiddleModernComponent } from './angular-page/angular-middle/middle-modern/middle-modern.component';
import { MiddleAcrossComponent } from './angular-page/angular-middle/middle-across/middle-across.component';
import { MiddleSpeedPerformanceComponent } from './angular-page/angular-middle/middle-speed-performance/middle-speed-performance.component';
import { MiddleIncredibleToolingComponent } from './angular-page/angular-middle/middle-incredible-tooling/middle-incredible-tooling.component';
import { MiddleLovedComponent } from './angular-page/angular-middle/middle-loved/middle-loved.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularPageComponent,
    AngularHeaderComponent,
    AngularMiddleComponent,
    AngularFooterComponent,
    MiddleModernComponent,
    MiddleAcrossComponent,
    MiddleSpeedPerformanceComponent,
    MiddleIncredibleToolingComponent,
    MiddleLovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
