import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './passData/child/child.component';
import { ParentComponent } from './passData/parent/parent.component';
import { NameComponent } from './passData/name/name.component';
import { NameParentComponent } from './passData/name-parent/name-parent.component';
import { VersionComponent } from './passData/version/version.component';
import { VersionParentComponent } from './passData/version-parent/version-parent.component';
import { VoterComponent } from './parentListens/voter/voter.component';
import { VotertalkerComponent } from './parentListens/votertalker/votertalker.component';
import { CountdownTimerComponent } from './parentInteracts/countdown-timer/countdown-timer.component';
import { CountdownTimerParentComponent } from './parentInteracts/countdown-timer-parent/countdown-timer-parent.component';
import { CountdownViewChildParentComponent } from './parentInteracts/countdown-view-child-parent/countdown-view-child-parent.component';
import { CommunicationServiceComponent } from './communication-service/communication-service.component';
import { AstronautComponent } from './communication-service/astronaut/astronaut.component';
import { HeroAppMainComponent } from './communication-service/hero-app-main/hero-app-main.component';
import { HeroControlComponent } from './communication-service/hero-control/hero-control.component';
import { HeroTeamComponent } from './communication-service/hero-team/hero-team.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    NameComponent,
    NameParentComponent,
    VersionComponent,
    VersionParentComponent,
    VoterComponent,
    VotertalkerComponent,
    CountdownTimerComponent,
    CountdownTimerParentComponent,
    CountdownViewChildParentComponent,
    CommunicationServiceComponent,
    AstronautComponent,
    HeroAppMainComponent,
    HeroControlComponent,
    HeroTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
