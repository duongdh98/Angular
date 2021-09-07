import { 
  Component, 
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  @Input()

  get name(): string { 
    return this._name; 
  }
  
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  
  private _name = '';

  constructor() { }

  ngOnInit(): void {
  }

}
