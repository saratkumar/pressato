import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../app.service';
declare var jQuery:any; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
categoryBehaviourSubj = new BehaviorSubject([]);
authBehaviourSubj = new BehaviorSubject(false);
cartBehaviourSubj = new BehaviorSubject([]);
categoryList: Array<any> = [];
orderDetail: any = [];
  userData: any;
  productList: any;
  constructor(private appService: AppService) { }


setCategoryList(categoryList) {
  this.categoryList = categoryList;
  this.categoryBehaviourSubj.next(this.categoryList)
}  

getCategoryList() {
  return this.categoryList;
}

setProductList(products) {
  this.productList = products;
}

getProductList() {
  return this.productList;
}

setAuth(authDetails: any) {
  this.authBehaviourSubj.next(true);
}

setOrderDetail(orderDetail) {
  this.orderDetail = orderDetail;
}

getOrderDetail() {
  return this.orderDetail;
}

setUserData(userObj) {
  this.userData = userObj;
}

addItemToCart(product) {
  let params = this.orderDetail.find(data => data.product === product._id);
  let method; 
  if(params) {
    params.quantity = product.quantity;
    method = 'updateCart';
  } else {
    method = 'postAddToCart';
    params = { "isDeleted": false, "isBilled": false, "quantity": product.quantity, "additionalNotes" : "", "address": "5cbe10be2771967f4327f3d4", "user": this.userData._id, "product": product._id}
  }
  
  this.appService[method](params, (successFn) => {
    if(method === 'postAddToCart') {
      this.orderDetail.push(params);
    }
    else {
      this.orderDetail.find(data => data.product === product._id)['quantity'] = params.quantity;
    }
    this.cartBehaviourSubj.next(this.orderDetail);
  }, (errorFn) =>{
    
  });
}


}
