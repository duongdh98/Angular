import { Component, OnInit } from '@angular/core';
import { 
  keyframes,
  style,
  state,
  animate,
  transition, 
  trigger } from '@angular/animations';

@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.component.html',
  styleUrls: ['./pop-over.component.scss'],
  animations: [
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)' 
      })),
      transition('* => move',
        animate('2000ms', keyframes([
          style({transform: 'translateX(0)     rotate(0)',      offset: 0}),
          style({transform: 'translateX(50%)   rotate(90deg)',  offset: 0.33}),
          style({transform: 'translateY(-75%)  rotate(180deg)', offset: 0.66}),
        ])
      )),
    ])
  ]
})
export class PopOverComponent implements OnInit {

  constructor() { }

  position: string;

  changPosition( newPosition: string ) {
    this.position = newPosition;
  }

  // logAnimation($event) {
  //   console.log(`${this.position} animation ${$event.phaseName}`);
  // }

  ngOnInit(): void {
  }

}
