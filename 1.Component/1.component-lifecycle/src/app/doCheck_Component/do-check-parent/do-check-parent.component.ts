import { Component, OnInit, ViewChild } from '@angular/core';

import { DoCheckComponent } from '../do-check/do-check.component';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.scss']
})
export class DoCheckParentComponent implements OnInit {

  hero!: Hero;
  power = '';
  title = 'DoCheck';

  @ViewChild(DoCheckParentComponent) childView!: DoCheckParentComponent;

  constructor() { 
    this.reset();
  }

  ngOnInit(): void {
  }
  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }

}
