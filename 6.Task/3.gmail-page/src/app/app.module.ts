import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmailPageComponent } from './gmail-page/gmail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DetailMenuComponent } from './gmail-page/detail-menu/detail-menu.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import { DetailMessageComponent } from './gmail-page/detail-message/detail-message.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DetailSettingComponent } from './gmail-page/detail-setting/detail-setting.component';
import { BoxChatComponent } from './gmail-page/box-chat/box-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GmailPageComponent,
    DetailMenuComponent,
    DetailMessageComponent,
    DetailSettingComponent,
    BoxChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
