import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentMessageComponent } from './gmail-page/content-message/content-message.component';

import { GmailPageComponent } from './gmail-page/gmail-page.component';
import { AccountDetailRoutingComponent } from './home-routing/account-detail-routing/account-detail-routing.component';
import { AccountRoutingComponent } from './home-routing/account-routing/account-routing.component';
import { HomeRoutingComponent } from './home-routing/home-routing.component';
import { ContactComponent } from './home-routing/query-params/contact/contact.component';
import { HomeComponent } from './home-routing/query-params/home/home.component';
import { ProductComponent } from './home-routing/query-params/product/product.component';
import { QueryParamsComponent } from './home-routing/query-params/query-params.component';
import { TryRxjsComponent } from './try-rxjs/try-rxjs.component';

const routes: Routes = [
  { 
    path: 'gmail-home', 
    component: GmailPageComponent,
    children: [
      {path: 'content', component: ContentMessageComponent}
    ]
  },
  { 
    path: 'routing-home', 
    component: HomeRoutingComponent,
    children: [
      {path: 'account', component: AccountRoutingComponent},
      {path: 'account/:id', component: AccountDetailRoutingComponent},
      {path: 'query-params', component: QueryParamsComponent},
      {path: 'query-params-home', component: HomeComponent},
      {path: 'query-params-contact', component: ContactComponent},
      {path: 'query-params-product', component: ProductComponent}
    ]
  },
  {
    path: 'try-rxjs',
    component: TryRxjsComponent
  },
  { path: '', redirectTo: '/gmail-home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
