import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { AppService } from '../app.service';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { SharedService } from '../common/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  form: Form;
  contactObj: any = {};
  constructor(private appService: AppService,
    private sharedService: SharedService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.appService.postContactUs(this.contactObj, (success) => {
      this.contactObj = {};
      this.sharedService.showNotification.next('contact');
      this.router.navigateByUrl('')
    }, (error) => {})
  }

}
