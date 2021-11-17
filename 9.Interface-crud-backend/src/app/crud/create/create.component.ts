import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  rolesForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: CrudService
  ) { }

  ngOnInit(): void {

    this.rolesForm = this.formBuilder.group({
      id: '',
      name: '',
      parent: '',
      permissions: ['']
    })
  }

  submitRoles() {
    this.service.createRole(this.rolesForm.value).subscribe((data) => {
      console.log(data);

    })
  }
}
