import { 
  Component, 
  Input, 
  SimpleChanges,
  OnChanges
} from '@angular/core';

import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
  styleUrls: ['./on-change.component.scss']
})
export class OnChangeComponent implements OnChanges {

  @Input() 
  hero!: Hero;

  @Input() 
  power = '';

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);

      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  reset() {
    this.changeLog = [];
  }

}
