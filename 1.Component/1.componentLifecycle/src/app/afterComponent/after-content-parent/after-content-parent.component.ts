import { 
  Component, 
  OnInit 
} from '@angular/core';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styleUrls: ['./after-content-parent.component.scss'],
  providers: [ LoggerService ]
})
export class AfterContentParentComponent implements OnInit {

  show = true;
  constructor(public logger: LoggerService) { }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

  ngOnInit(): void {
  }


}
