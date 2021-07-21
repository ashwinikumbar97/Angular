import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-inbox',
  templateUrl: './email-inbox.component.html',
  styleUrls: ['./email-inbox.component.css']
})
export class EmailInboxComponent implements OnInit {
  emails=[];
  constructor(private emailService:EmailService) { }

  ngOnInit(){
    this.emailService.getEmails().subscribe((emails)=>{
      this.emails=emails;
    });
    }
    
}
