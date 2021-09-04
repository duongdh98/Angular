import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AfterContentParentComponent } from './afterComponent/after-content-parent/after-content-parent.component';
import { AfterContentComponent } from './afterComponent/after-content/after-content.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './childComponent/child/child.component';
import { PeekABooComponent } from './peekA_Component/peek-a-boo/peek-a-boo.component';
import { PeekABooParentComponent } from './peekA_Component/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooDirective } from './peekA_Component/peek-a-boo.directive';
import { DoCheckComponent } from './doCheck_Component/do-check/do-check.component';
import { DoCheckParentComponent } from './doCheck_Component/do-check-parent/do-check-parent.component';
import { FormsModule } from '@angular/forms';
import { OnChangeComponent } from './onChange_Component/on-change/on-change.component';
import { OnChangeParentComponent } from './onChange_Component/on-change-parent/on-change-parent.component';
import { AfterViewComponent } from './afterComponent/after-view/after-view.component';
import { AfterViewParentComponent } from './afterComponent/after-view-parent/after-view-parent.component';
import { ChildViewComponent } from './childComponent/child-view/child-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    ChildComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    PeekABooDirective,
    DoCheckComponent,
    DoCheckParentComponent,
    OnChangeComponent,
    OnChangeParentComponent,
    AfterViewComponent,
    AfterViewParentComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
