import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.scss']
})
export class AppProfileComponent implements OnInit {
  username$ = this.route.paramMap
  .pipe(
    map((params: ParamMap) => params.get('username'))
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
