import { splitNsName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-account-detail-routing',
  templateUrl: './account-detail-routing.component.html',
  styleUrls: ['./account-detail-routing.component.scss']
})
export class AccountDetailRoutingComponent implements OnInit {

  id: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    // >> router param
      this.route.paramMap.subscribe((parmas: ParamMap) => {
        this.id = +parmas.get('id');
      })

    // >> router query param
  }
}
