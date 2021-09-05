import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-data-to-parent',
  templateUrl: './send-data-to-parent.component.html',
  styleUrls: ['./send-data-to-parent.component.scss']
})
export class SendDataToParentComponent implements OnInit {

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
