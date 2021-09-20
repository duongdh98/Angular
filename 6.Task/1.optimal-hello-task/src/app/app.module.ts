import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { HelloHeaderComponent } from './hello-page/hello-header/hello-header.component';
import { HelloMiddleComponent } from './hello-page/hello-middle/hello-middle.component';
import { HelloFooterComponent } from './hello-page/hello-footer/hello-footer.component';
import { SearchComponent } from './hello-page/hello-header/search/search.component';
import { ListIconsComponent } from './hello-page/hello-header/list-icons/list-icons.component';
import { OtherRecordingItemComponent } from './hello-page/hello-middle/other-recording-item/other-recording-item.component';
import { AlsoSearchItemComponent } from './hello-page/hello-middle/also-search-item/also-search-item.component';
import { PeopleAlsoItemComponent } from './hello-page/hello-middle/people-also-item/people-also-item.component';
import { YoutobeContentItemComponent } from './hello-page/hello-middle/youtobe-content-item/youtobe-content-item.component';
import { OtherContentItemComponent } from './hello-page/hello-middle/other-content-item/other-content-item.component';
import { SlideShowItemComponent } from './hello-page/hello-middle/slide-show-item/slide-show-item.component';
import { GifItemComponent } from './hello-page/hello-middle/gif-item/gif-item.component';
import { OtherWordsSearchItemComponent } from './hello-page/hello-middle/other-words-search-item/other-words-search-item.component';
import { NextPageItemComponent } from './hello-page/hello-footer/next-page-item/next-page-item.component';
import { GooglePictureItemComponent } from './hello-page/hello-footer/google-picture-item/google-picture-item.component';
import { SettingMenuComponent } from './hello-page/hello-header/setting-menu/setting-menu.component';
import { AboutResultComponent } from './hello-page/hello-middle/about-result/about-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloPageComponent,
    HelloHeaderComponent,
    HelloMiddleComponent,
    HelloFooterComponent,
    SearchComponent,
    ListIconsComponent,
    OtherRecordingItemComponent,
    AlsoSearchItemComponent,
    PeopleAlsoItemComponent,
    YoutobeContentItemComponent,
    OtherContentItemComponent,
    SlideShowItemComponent,
    GifItemComponent,
    OtherWordsSearchItemComponent,
    NextPageItemComponent,
    GooglePictureItemComponent,
    SettingMenuComponent,
    AboutResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
