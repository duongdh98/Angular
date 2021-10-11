import { Component, OnInit, Input } from '@angular/core';
import { Message ,messages } from './content-message';
import { FormControl, FormsModule } from '@angular/forms';
import { GmailService } from '../gmail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.component.html',
  styleUrls: ['./detail-message.component.scss']
})
export class DetailMessageComponent implements OnInit {

  @Input() allMessage = messages;
  

  messageControl = new FormControl();

  constructor(private gmailService: GmailService, private route: Router) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.gmailService.itemsControll(this.messageControl);
  }

  changCheck() {
    this.gmailService.checkedAll = false;
  }

  nextMesage(idMessage: Message) {
    this.route.navigate(['../gmail-home/content'], { queryParams: { state: 'inbox', contentId: idMessage.id} })
  }
}