import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZippyBasicComponent } from './singleSlot/zippy-basic/zippy-basic.component';
import { ZippyBasicParentComponent } from './singleSlot/zippy-basic-parent/zippy-basic-parent.component';
import { ZippyMutislotParentComponent } from './multiSlot/zippy-mutislot-parent/zippy-mutislot-parent.component';
import { ZippyMutislotComponent } from './multiSlot/zippy-mutislot/zippy-mutislot.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyBasicComponent,
    ZippyBasicParentComponent,
    ZippyMutislotParentComponent,
    ZippyMutislotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
