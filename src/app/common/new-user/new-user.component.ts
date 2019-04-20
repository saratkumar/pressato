import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Form } from '@angular/forms';
import { AppService } from 'src/app/app.service';
declare var jQuery:any; 

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})


export class NewUserComponent implements OnInit {
  newUserObj:any = {};
  form: Form
  @Output() signIn = new EventEmitter();
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  onSignIn() {
    this.signIn.emit();
  }

  onSignUp() {
    this.appService.postNewUser(this.newUserObj, (success) => {
      jQuery("#myModal").modal("hide");
    }, (error) => {})
  }

}
