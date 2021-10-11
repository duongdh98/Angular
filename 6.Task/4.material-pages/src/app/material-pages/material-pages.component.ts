import { Component, OnInit, Input } from '@angular/core';
import { links, Link } from './material-link';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-pages',
  templateUrl: './material-pages.component.html',
  styleUrls: ['./material-pages.component.scss']
})
export class MaterialPagesComponent implements OnInit {

  @Input() allLink = links;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // nextPages(allLinks: Link) {
  //   this.route.navigate(['./material'], {queryParams: {component: allLinks.link, id: allLinks.id}})
  // }

}
