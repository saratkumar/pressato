import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  listOfOrders: Array<any> =[];
  constructor(private sharedService: SharedService,private appService: AppService) { }

  ngOnInit() {
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.appService.getUserOrders(this.sharedService.getUserData()['_id'], (success) => {
      this.appService.getAddress('', (success) => {}, (error) => {});
    }, (error) =>{});
  }
}
