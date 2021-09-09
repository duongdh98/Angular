import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'try-http-again';
  showHeroes = true;
  showConfig = true;
  showDownloader = true;
  showUploader = true;
  showSearch = true;

  toggleHeroes() { 
    this.showHeroes = !this.showHeroes; 
  }

  toggleConfig() { 
    this.showConfig = !this.showConfig; 
  }

  toggleDownloader() { 
    this.showDownloader = !this.showDownloader; 
  }

  toggleUploader() { 
    this.showUploader = !this.showUploader; 
  }

  toggleSearch() { 
    this.showSearch = !this.showSearch;
  }
  
}
