import { Directive, OnInit } from '@angular/core';

import { LoggerService } from '../logger.service';

let nextId = 1;

@Directive({
  selector: '[appPeekABoo]'
})
export class PeekABooDirective implements OnInit {

  constructor(private logger: LoggerService) { }
  // implement OnInit's `ngOnInit` method
  ngOnInit(): void {
    this.logIt(`Oninit`);
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }

}
