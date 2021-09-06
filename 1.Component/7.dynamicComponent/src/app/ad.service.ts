import { Injectable } from '@angular/core';
import { AdItem } from './anchorDirective/ad-item';
import { HeroJobAddComponent } from './resolvingComponent/hero-job-add/hero-job-add.component';
import { HeroProfileComponent } from './resolvingComponent/hero-profile/hero-profile.component';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(
        HeroProfileComponent,
        { 
          name: 'Bombasto', 
          bio: 'Brave as they come' 
        }
      ),
      new AdItem(
        HeroProfileComponent,
        { 
          name: 'Dr IQ', 
          bio: 'Smart as they come' 
        }
      ),
      new AdItem(
        HeroJobAddComponent,
        { 
          headline: 'Hiring for several positions', 
          body: 'Submit your resume today!' 
        }
      ),
      new AdItem(
        HeroJobAddComponent,
        { 
          headline: 'Openings in all departments', 
          body: 'Apply today' 
        }
      )
    ];
  }
}