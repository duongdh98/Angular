import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-menu',
  templateUrl: './setting-menu.component.html',
  styleUrls: ['./setting-menu.component.scss']
})
export class SettingMenuComponent implements OnInit {

  showSetting = false;
  showMenu = false;
  heighSetting = '0px';
  heighMenu = '0px';

  clickSetting() {
    this.showSetting = !this.showSetting;

    if (this.showSetting == true) {
      this.showMenu = false;
      this.heighMenu = '0px';
      this.heighSetting = '300px';
    } else {
      this.heighSetting = '0px';
    }
  }

  clickMenu() {
    this.showMenu = !this.showMenu;

    if (this.showMenu == true) {
      this.showSetting = false;
      this.heighSetting = '0px'
      this.heighMenu = '400px';
    } else {
      this.heighMenu = '0px';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
