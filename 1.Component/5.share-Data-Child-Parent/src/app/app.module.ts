import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendDataToChildComponent } from './send-data-to-child/send-data-to-child.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SendDataToParentComponent } from './send-data-to-parent/send-data-to-parent.component';
import { ItemOutputComponent } from './item-output/item-output.component';

@NgModule({
  declarations: [
    AppComponent,
    SendDataToChildComponent,
    ItemDetailsComponent,
    SendDataToParentComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
