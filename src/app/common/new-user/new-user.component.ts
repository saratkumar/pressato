import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  @Output() signIn = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSignIn() {
    this.signIn.emit();
  }

}
