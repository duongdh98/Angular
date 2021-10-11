import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  pageNo=0;
  snapshotPageNo = 0; 

  constructor(private activatedroute: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {

    this.snapshotPageNo = +this.activatedroute.snapshot.queryParamMap.get('pageNum') || 0;

    this.activatedroute.queryParamMap.subscribe(params => {
      this.pageNo = +params.get('pageNum') || 0;
      console.log('Query params', this.pageNo);
    });
  }

  nextPage() {
    this.route.navigate(['../routing-home/query-params-product'], { queryParams: { state: '#zzzok', pageNum: this.pageNo + 1, productAll: 10} })
  }

}
