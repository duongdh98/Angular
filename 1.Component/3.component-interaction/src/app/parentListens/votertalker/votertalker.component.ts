import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votertalker',
  templateUrl: './votertalker.component.html',
  styleUrls: ['./votertalker.component.scss']
})
export class VotertalkerComponent implements OnInit {

  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
