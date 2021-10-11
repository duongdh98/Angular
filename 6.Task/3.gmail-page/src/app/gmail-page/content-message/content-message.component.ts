import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-content-message',
  templateUrl: './content-message.component.html',
  styleUrls: ['./content-message.component.scss']
})
export class ContentMessageComponent implements OnInit {

  id: Number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parmas: ParamMap) => {
      this.id = +parmas.get('id');
    })
  }

}
