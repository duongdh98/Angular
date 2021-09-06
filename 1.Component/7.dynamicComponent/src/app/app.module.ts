import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './anchorDirective/ad.directive';
import { HeroJobAddComponent } from './resolvingComponent/hero-job-add/hero-job-add.component';
import { HeroProfileComponent } from './resolvingComponent/hero-profile/hero-profile.component';
import { AdBannerComponent } from './anchorDirective/ad-banner/ad-banner.component';
import { AdService } from './ad.service';

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    HeroJobAddComponent,
    HeroProfileComponent,
    AdBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ AdService ],
  entryComponents: [
    HeroJobAddComponent,
    HeroProfileComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
