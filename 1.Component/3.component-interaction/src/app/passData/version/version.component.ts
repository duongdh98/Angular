import { 
  Component, 
  Input, 
  OnChanges, 
  SimpleChange, 
  SimpleChanges 
} from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnChanges {
  
  @Input() 
  major = 0;

  @Input() 
  minor = 0;

  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];

    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);

      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      }
      const from = JSON.stringify(changedProp.previousValue);
      
      log.push(`${propName} changed from ${from} to ${to}`);
    }
    this.changeLog.push(log.join(', '));
  }
}
