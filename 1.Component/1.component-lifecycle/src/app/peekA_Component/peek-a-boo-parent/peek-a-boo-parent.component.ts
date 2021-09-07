import { 
  Component, 
  OnInit 
} from '@angular/core';
import { LoggerService } from 'src/app/logger.service';

@Component({
  selector: 'app-peek-a-boo-parent',
  templateUrl: './peek-a-boo-parent.component.html',
  styleUrls: ['./peek-a-boo-parent.component.scss'],
  providers: [ LoggerService ]
})
export class PeekABooParentComponent implements OnInit {

  hasChild = false;
  hookLog: string[] = [];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) { 
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  ngOnInit(): void {
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Windstorm';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

}
