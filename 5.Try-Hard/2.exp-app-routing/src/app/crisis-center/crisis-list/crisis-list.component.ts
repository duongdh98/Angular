import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises$!: Observable<Crisis[]>;
  selectedId = 0;

  constructor(
    private service: CrisisService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getCrises();
      })
    );
  }
}
