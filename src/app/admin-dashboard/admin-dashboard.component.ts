import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { getLocaleExtraDayPeriods } from '@angular/common';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  listOfOrders: Array<any> =[];
  constructor(private sharedService: SharedService,private appService: AppService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getOrders();
    }, 100);
  }

  getOrders() {
    this.appService.getOrder((success) => {
      this.listOfOrders = success.data.orders;
      const listOfProductList = this.sharedService.getProductList();
      this.listOfOrders.forEach(order => {
        order.listOfProducts = [];
        order.cartIds.forEach(cartData => {
          this.appService.getCartDetails(cartData, (cartDetail) => {
            order.listOfProducts.push(listOfProductList.find(prod => cartDetail.data.product === prod._id));
            // listOfProductList.forEach(prod => {
            //   if(cartDetail.data.product === prod._id) {
            //     console.log(prod);
            //   }
            // });
          }, (error) => {});
        });
      });
    }, (error) =>{});
  }
}
