import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

import { Hero } from '../hero'; 

@Component({
  selector: 'app-hero-control',
  templateUrl: './hero-control.component.html',
  styleUrls: ['./hero-control.component.scss']
})
export class HeroControlComponent implements OnInit {

  @Input() hero!: Hero;

  activate() {
    this.hero.active = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
