import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-item',
  templateUrl: './gif-item.component.html',
  styleUrls: ['./gif-item.component.scss']
})
export class GifItemComponent implements OnInit {

  showGif:boolean = false;
  arrowGif:boolean = false;
  heighGif = '0px';

  onClick() {
    this.showGif = !this.showGif;

    if (this.showGif == true) {
      this.heighGif = '210px';
      this.arrowGif = true;
    }

    else {
      this.heighGif = '0px';
      this.arrowGif = false;
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
