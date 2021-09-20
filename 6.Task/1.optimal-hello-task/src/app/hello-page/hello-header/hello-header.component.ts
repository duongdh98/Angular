import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hello-header',
  templateUrl: './hello-header.component.html',
  styleUrls: ['./hello-header.component.scss']
})
export class HelloHeaderComponent implements OnInit {

  navbarFixed:boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 65) {
      this.navbarFixed = true;
    }

    else {
      this.navbarFixed = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
