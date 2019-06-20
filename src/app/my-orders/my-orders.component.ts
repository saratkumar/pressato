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
    setTimeout(() => {
      this.getOrderDetails();
    }, 100);
  }

  getOrderDetails() {
    this.appService.getUserOrders((success) => {
      this.listOfOrders = success.data;
      const listOfProductList = this.sharedService.getProductList();
      this.listOfOrders.forEach(order => {
        order.cartIds.forEach(cartData => {
          listOfProductList.forEach(prod => {
            if(cartData.product === prod._id) {
              if (cartData.product.productMeta) {
                prod.productMeta = cartData.product.productMeta;
                prod.product1 = listOfProductList.find(data => data._id === cartData.product.productMeta[0]);
                prod.product2 = listOfProductList.find(data => data._id === cartData.product.productMeta[1]);
              }
              cartData.productDetail = prod;
            }
          });
        });
      });
    }, (error) =>{});
  }
}
