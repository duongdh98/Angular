import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { GmailService } from './gmail.service';

@Component({
  selector: 'app-gmail-page',
  templateUrl: './gmail-page.component.html',
  styleUrls: ['./gmail-page.component.scss']
})
export class GmailPageComponent implements OnInit {

  showSetting = false;
  showMoreMenus = true;
  titleMoreMenu = false;

  titleMenu = 'menu';
  titleMore = 'more';
  titleMeet = 'meet';
  titleCategories = 'categories';
  titleClickMore = 'more-click';
  titleClickLess = 'less-click';

  allCheck = new FormControl();

  constructor(private gmailService: GmailService) { }

  quickSetting() {
    this.showSetting = !this.showSetting;
  }

  closeSetting() {
    this.showSetting = false;
  }

  showMoreMenu() {
    this.titleMoreMenu = !this.titleMoreMenu;
    this.showMoreMenus = !this.showMoreMenus;
  }
  closeMoreMenu() {
    this.titleMoreMenu = !this.titleMoreMenu;
    this.showMoreMenus = !this.showMoreMenus;
  }

  ngOnInit(): void {
  }

  onCheckAll(event: any) {

    if (event.target.checked) {
      this.gmailService.allChecked(this.allCheck);
    } 

    else {
      this.gmailService.unChecked(this.allCheck);
    }
  }

  addMessage() {
    this.gmailService.closeChat = true;
  }
}
