import { 
  Component,
  AfterContentChecked,
  AfterContentInit,
  ContentChild
} from '@angular/core';

import { ChildComponent } from 'src/app/childComponent/child/child.component';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-after-content',
  templateUrl: './after-content.component.html',
  styleUrls: ['./after-content.component.scss']
})
export class AfterContentComponent implements 
AfterContentChecked,
AfterContentInit 
{
  private prevHero = '';
  comment = '';
    // Query for a CONTENT child of type `ChildComponent`
  @ContentChild(ChildComponent) contentChild!: ChildComponent;

  constructor(private logger: LoggerService) {
    this.logIt('AfterContent constructor');
  }

  ngAfterContentInit() {
    // contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    // contentChild is updated after the content has been checked
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } 
    
    this.prevHero = this.contentChild.hero;
    this.logIt('AfterContentChecked');
    this.doSomething();

  }

  // This surrogate for real business logic sets the `comment`
  private doSomething() {
    this.comment = this.contentChild.hero.length > 10 ? `That's a long name` : '';
  }

  private logIt(method: string) {
    const child = this.contentChild;
    const message = `${method}: ${child ? child.hero : 'no'} child content`;
    this.logger.log(message);
  }

}
