import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {

  intervalId = 0;
  message = '';
  seconds = 11;

  ngOnDestroy() { 
    this.clearTimer(); 
  }
  
  start() { 
    this.countDown(); 
  }

  stop()  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer() { 
    clearInterval(this.intervalId); 
  }
  
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;

      if (this.seconds === 0) {
        this.message = 'Blast off!';
      }

      if (this.seconds < 0) {
        this.seconds = 10; 
      } // reset

      this.message = `T-${this.seconds} seconds and counting`;
    }, 1000);
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
