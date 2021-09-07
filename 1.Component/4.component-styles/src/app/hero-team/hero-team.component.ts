import { 
  Component, 
  OnInit,
  Input 
} from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-team',
  templateUrl: './hero-team.component.html',
  styleUrls: ['./hero-team.component.scss']
})
export class HeroTeamComponent implements OnInit {

  @Input() 
  hero!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
