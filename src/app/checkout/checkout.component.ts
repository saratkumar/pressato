import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  listOfUserAddress: Array<any> = [];
  addressObj: any = {};
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.appService.postAddress(this.addressObj, (success)=> {
      this.router.navigateByUrl('');
    }, (error)=> {});
  }

}
