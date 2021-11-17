import { Component, ViewChild } from '@angular/core';
import { AllService } from './service/all-service.service';
import { StartwithComponent } from './startwith/startwith.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'js-trainniing';

  constructor(
    public service: AllService
  ) {}

  ngOnInit(): void {

  }

}
