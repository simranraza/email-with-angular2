import { Component, OnInit } from '@angular/core';
import { Email } from '../email.model';
import { EmailService } from '../email.service';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.css']
})
export class EmailComposeComponent implements OnInit {

  constructor(private emailService:EmailService) { }

  ngOnInit() {
  }

  private onSubmitEmailForm(emailForm: NgForm) {
    console.log('form submitted',emailForm);
    const temp: Email = {
      to: emailForm.value.to,
      cc: emailForm.value.cc,
      subject: emailForm.value.subject,
      body: emailForm.value.body
    };

    this.emailService.sendEmailToBackend(temp).then((data)=> {
      console.log(data);
      console.log('request completed');
    });
    emailForm.resetForm();
  }

}
