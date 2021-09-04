import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { LoggerService } from 'src/app/logger.service';
import { PeekABooDirective } from '../peek-a-boo.directive';

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.scss']
})
export class PeekABooComponent extends PeekABooDirective implements
  OnChanges, 
  OnInit, 
  DoCheck,
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy 
{
  @Input() 
  name = '';

  private verb = 'initialized';

  constructor(logger: LoggerService) {
    super(logger);

    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
   }

  ngOnInit(): void {
  }
  // only called for/if there is an @input variable set by parent.
  ngOnChanges(changes: SimpleChanges) {
    const changesMsgs: string[] = [];
    for (const propName in changes) {
      if (propName === 'name') {
        const name = changes.name.currentValue;
        changesMsgs.push(`name ${this.verb} to "${name}"`);
      }

      changesMsgs.push(propName + ' ' + this.verb);
    }
    this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
    this.verb = 'changed'; // next time it will be a change
  }
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { 
    this.logIt(`DoCheck`); 
  }

  ngAfterContentInit() { 
    this.logIt(`AfterContentInit`);  
  }
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { 
    this.logIt(`AfterContentChecked`); 
  }

  ngAfterViewInit() { 
    this.logIt(`AfterViewInit`); 
  }
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { 
    this.logIt(`AfterViewChecked`); 
  }

  ngOnDestroy () { 
    this.logIt(`OnDestroy`); 
  }

}