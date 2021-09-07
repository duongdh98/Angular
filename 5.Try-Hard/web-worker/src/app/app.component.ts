import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web-worker';
  loading = false;
  result = '';
  sliderTranslate = 'translateX()';
  private animation = {
    translate : 0,
    rightDirection : true
  }

  ngOnInit(): void {

  }

  handleLongOperation() {

  }

  animationFrame() {
    
  }
}
