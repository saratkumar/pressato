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
      this.getCartDetails();   
    }, 200);
   
  }
  getCartDetails() {
    let products = this.sharedService.getProductList();
    this.appService.getCurrentUserOrderDetail(this.sharedService.getUserData()['_id'], (success) => {
      
      this.sharedService.cartBehaviourSubj.next(success.data);
      this.listOfOrder = [];
      if(success.data && success.data.carts) {
        success.data.carts.forEach(cart => {
          products.forEach(prod => {
            if(prod._id === cart.product) {
              prod.order = cart;
              this.listOfOrder.push(prod);
            } 
          });
        });  
      }
      
      
    }, (error) => {}); 
  }

  

  addToCart(product) {
    this.sharedService.addItemToCart(product);
  }

  removeFromCart(productIndex, order) {
    this.appService.deleteProductFromCart(order, (success) => {
      this.getCartDetails();
    }, (error) => {});
    
  }

  routeToCategory() {
    let categoryId = this.sharedService.getCategoryList()[0]['_id'];
    this.router.navigateByUrl('/category/'+categoryId);
  }
}
