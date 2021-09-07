import { Component } from '@angular/core';

import { CUSTOMERS } from './customers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Featured product:Featured product:';
  customers = CUSTOMERS;
  currentCustomer = 'Maria';

  itemImageUrl = '../assets/Tho7Mau.jpg';

  recommended = 'You might also like:';
  itemImageUrl2 = '../assets/Zen.jpg';

  getVal(): number {
    return 2;
  }

}
