import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroAppComponent } from './hero-app/hero-app.component';
import { HeroMainComponent } from './hero-main/hero-main.component';
import { HeroControlComponent } from './hero-control/hero-control.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroTeamComponent } from './hero-team/hero-team.component';
import { QuestSummaryComponent } from './quest-summary/quest-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroAppComponent,
    HeroMainComponent,
    HeroControlComponent,
    HeroDetailsComponent,
    HeroTeamComponent,
    QuestSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
