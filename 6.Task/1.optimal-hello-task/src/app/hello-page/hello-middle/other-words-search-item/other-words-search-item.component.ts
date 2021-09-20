import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-words-search-item',
  templateUrl: './other-words-search-item.component.html',
  styleUrls: ['./other-words-search-item.component.scss']
})
export class OtherWordsSearchItemComponent implements OnInit {

  showContent = true;

  onClick() {
    this.showContent = !this.showContent;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
