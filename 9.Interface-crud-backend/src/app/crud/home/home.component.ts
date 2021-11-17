import { Component, Input, OnInit } from '@angular/core';
import { RoleNode, Roles } from 'src/app/helper/data.interface';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() totalRoles: Roles[] = [];

  constructor(
    private service: CrudService
  ) { }

  ngOnInit(): void {

    this.service.getAllRoles().subscribe((roles: Roles[]) => {
      this.totalRoles = roles;
    })
  }

  deleteRoleHome(id: string) {

    this.service.deleteRole(id).subscribe(res => {
      console.log(res);
    });
  }

}
