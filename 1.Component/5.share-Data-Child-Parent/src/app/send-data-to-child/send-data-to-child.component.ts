import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-data-to-child',
  templateUrl: './send-data-to-child.component.html',
  styleUrls: ['./send-data-to-child.component.scss']
})
export class SendDataToChildComponent implements OnInit {

  currentItem = 'Television';
  
  constructor() { }

  ngOnInit(): void {
  }

}
