import { Component, OnInit } from '@angular/core';
import { GmailService } from '../gmail.service';

@Component({
  selector: 'app-box-chat',
  templateUrl: './box-chat.component.html',
  styleUrls: ['./box-chat.component.scss']
})
export class BoxChatComponent implements OnInit {

  closeChat: boolean = false;

  constructor(private gmailService: GmailService) { }

  ngOnInit(): void {
    this.gmailService.closeChat = false;
  }

  ngDoCheck(): void {
    this.closeChat = this.gmailService.closeChat;
  }

  onClose() {
    this.gmailService.closeChat = false;
  }

}
