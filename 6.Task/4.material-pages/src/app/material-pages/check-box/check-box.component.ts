import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {

  checked = false;
  indeterminate = true;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
