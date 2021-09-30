import { Component, OnInit, Input } from '@angular/core';

import { details } from './detail';

@Component({
  selector: 'app-detail-menu',
  templateUrl: './detail-menu.component.html',
  styleUrls: ['./detail-menu.component.scss']
})
export class DetailMenuComponent implements OnInit {

  @Input() detailIcons = details;
  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
