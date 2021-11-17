import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { from, Observable } from 'rxjs';
import { RoleNode, Roles } from '../helper/data.interface';
import { ROLES } from '../helper/role.mock';
import { AllService } from '../service/all-service.service';

@Component({
  selector: 'app-startwith',
  templateUrl: './startwith.component.html',
  styleUrls: ['./startwith.component.scss']
})
export class StartwithComponent implements OnInit, OnChanges {

  @Input() sourceRoles: Roles[] = [];
  // @Input() totalDataRoles: Roles[] = [];

  @Input() dataRoles = ROLES;

  totalDataRoles;

  roleCheck = [{
    id: 'check',
    name: 'Web app-check-check',
    parent: null,
    permission: []
  }]

  constructor(
  ) { }

  ngOnInit(): void {
    this.totalDataRoles = this.dataRoles.concat(this.roleCheck);

    /** entreis() + next()
      Get phan tu ke tiep moi khi goi ham next ,
      lay tu dau den cuoi
    */
    const iterator = this.dataRoles.entries();
    console.log("Entries", iterator.next().value);
    console.log("Entries", iterator.next().value);

    /** every()
     Thay doi tat ca cac gia tri trong mang theo y muon
     neu tim thay gia tri thay doi thi return true, khong thi return false
    */
    const isEvery = (currentValue) => currentValue = 'web-app'; // currentValue.id -> thay tat ca id trong mang bang web-app
    console.log("Every", this.totalDataRoles.every(isEvery));

    /* filer()
     * Thay the array theo vi tri mong muon
    */
    const result = this.totalDataRoles.filter(d =>  d.id == 'web-app');
    console.log(result);

  }

  ngOnChanges(changes) {

    if (changes.sourceRoles) {
      // this.totalDataRoles = this.sourceRoles;

    }
  }


}
