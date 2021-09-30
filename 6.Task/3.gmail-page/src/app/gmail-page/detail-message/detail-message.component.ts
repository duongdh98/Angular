import { Component, OnInit, Input } from '@angular/core';
import { messages } from './content-message';
import { FormControl, FormsModule } from '@angular/forms';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.component.html',
  styleUrls: ['./detail-message.component.scss']
})
export class DetailMessageComponent implements OnInit {

  @Input() allMessage = messages;

  messageControl = new FormControl();

  constructor(private gmailService: GmailService) { }

  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.gmailService.itemsControll(this.messageControl);
  }

  changCheck() {
    this.gmailService.checkedAll = false;
  }
}
