import { 
  Component,
  Input
} from '@angular/core';

import { AdComponent } from 'src/app/anchorDirective/ad.component';

@Component({
  selector: 'app-hero-job-add',
  templateUrl: './hero-job-add.component.html',
  styleUrls: ['./hero-job-add.component.scss']
})
export class HeroJobAddComponent implements AdComponent  {
  @Input() 
  data: any;

}
