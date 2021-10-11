import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmailPageComponent } from './gmail-page/gmail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DetailMenuComponent } from './gmail-page/detail-menu/detail-menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { DetailMessageComponent } from './gmail-page/detail-message/detail-message.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DetailSettingComponent } from './gmail-page/detail-setting/detail-setting.component';
import { BoxChatComponent } from './gmail-page/box-chat/box-chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingComponent } from './home-routing/home-routing.component';
import { AccountDetailRoutingComponent } from './home-routing/account-detail-routing/account-detail-routing.component';
import { AccountRoutingComponent } from './home-routing/account-routing/account-routing.component';
import { ContentMessageComponent } from './gmail-page/content-message/content-message.component';
import { QueryParamsComponent } from './home-routing/query-params/query-params.component';
import { ContactComponent } from './home-routing/query-params/contact/contact.component';
import { ProductComponent } from './home-routing/query-params/product/product.component';
import { HomeComponent } from './home-routing/query-params/home/home.component';
import { TryRxjsComponent } from './try-rxjs/try-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    GmailPageComponent,
    DetailMenuComponent,
    DetailMessageComponent,
    DetailSettingComponent,
    BoxChatComponent,
    HomeRoutingComponent,
    AccountDetailRoutingComponent,
    AccountRoutingComponent,
    ContentMessageComponent,
    QueryParamsComponent,
    ContactComponent,
    ProductComponent,
    HomeComponent,
    TryRxjsComponent
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
