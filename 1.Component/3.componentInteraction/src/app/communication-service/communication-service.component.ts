import { 
  Component, 
  OnInit 
} from '@angular/core';

import { MissionService } from './mission.service';

@Component({
  selector: 'app-communication-service',
  templateUrl: './communication-service.component.html',
  styleUrls: ['./communication-service.component.scss'],
  providers: [ MissionService ]
})

export class CommunicationServiceComponent implements OnInit {

  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
  
  ngOnInit(): void {
  }

}
