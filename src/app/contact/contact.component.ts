import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name = '';
  email = '';
  message = '';
  endpoint= 'https://viktor-gruenwald.developerakademie.net/portfolio/send_mail.php';
  submitReport = '';
  submitComplete = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    AOS.init();
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }

  sendForm(form: any) {
    console.log(form);
    this
      .http
      .post(this.endpoint, form.value)
      .subscribe(
        response => this.handleResponse(response, form),
        error => this.handleError(error, form)
      );
  }

  handleResponse(response: any, form: any) {
    console.log(response);
    this.submitReport = "Thanks for your message. I will replay as soon as possible.";
    this.submitComplete = true;
    form.reset();
  }


  /**
   * show text on unsuccessful send
   *
   * @param error - send error
   * @param form - form content
   */
  handleError(error: any, form: any) {
    console.log(error);
    this.submitReport = "Error occure while sending your message! You can contact me directly on E-Mail: post@viktor-gruenwald.de";
    this.submitComplete = true;
    form.reset();
  }

}
