import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  quantity: number;
  proceedFurther: boolean = false;
  listOfOrder: Array<any> = [];
  constructor(private sharedService: SharedService, private appService: AppService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      let orderDetail = this.sharedService.getOrderDetail();
      let products = this.sharedService.getProductList();
      orderDetail.forEach(cart => {
        products.forEach(prod => {
          if(prod._id === cart.product) {
            prod.order = cart;
            this.listOfOrder.push(prod);
          } 
        });
      });  
    }, 500);
  }

  addToCart(product) {
    this.sharedService.addItemToCart(product);
  }

  removeFromCart(productIndex, order) {
    this.appService.deleteProductFromCart(order, (success) => {
      this.listOfOrder.splice(productIndex, 1);
      this.sharedService.getOrderDetail().splice(productIndex, 1);
      this.sharedService.cartBehaviourSubj.next(this.listOfOrder);
    }, (error)=> {});
    
  }

  routeToCategory() {
    let categoryId = this.sharedService.getCategoryList()[0]['_id'];
    this.router.navigateByUrl('/category/'+categoryId);
  }
}
