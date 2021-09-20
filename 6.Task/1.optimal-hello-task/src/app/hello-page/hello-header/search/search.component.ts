import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  popupHeigh = '';
  searchIconWidth = '0px';
  closeIconWidth = '0px';

  showHintInput = true;
  flagShowSetMenu = false;

  showPopup() {
    this.popupHeigh = '500%';
    this.searchIconWidth = '20px'
    this.closeIconWidth ='20px'
    this.showHintInput = false;
  }

  onKey(event: any) {
    this.popupHeigh = '500%';
    this.showHintInput = false;
    this.searchIconWidth = '20px';
    this.closeIconWidth = '20px';
  }
  onEsc(event: any) {
    this.popupHeigh = '0px';
    this.searchIconWidth = '0px';
    this.closeIconWidth = '0px';
    this.showHintInput = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
