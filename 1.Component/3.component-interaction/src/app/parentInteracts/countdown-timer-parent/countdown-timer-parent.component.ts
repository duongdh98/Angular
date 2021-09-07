import { 
  Component, 
  OnInit 
} from '@angular/core';

import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-timer-parent',
  templateUrl: './countdown-timer-parent.component.html',
  styleUrls: ['./countdown-timer-parent.component.scss']
})
export class CountdownTimerParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
