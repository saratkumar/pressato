import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  params: Object = {};
  showError: boolean = false;
  @Output() signUp = new EventEmitter();
  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  onSignUp() {
    this.signUp.emit();
  }
  

  onLoginIn() {
    this.appService.postLoginUser(this.params, (success) => {
    }, (error)=> {
      this.showError = true;
    });
  }

}
