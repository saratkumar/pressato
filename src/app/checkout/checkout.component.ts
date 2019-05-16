import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  listOfUserAddress: Array<any> = [];
  addressObj: any = {"phoneExt": "+91", "state": "TamilNadu"};
  listOfCartProducts: any = [];
  selectedAddress: any;
  showNewForm: boolean = false;
  rzp1: any;
  constructor(
    private appService: AppService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getUserAdderssList();
  }

  get nativeWindow() : any {
    return window;
 }

  getUserAdderssList() {
    this.appService.getUserAddress((success) => {
      this.listOfUserAddress = success.data;
      this.showNewForm = (this.listOfUserAddress && this.listOfUserAddress.length) ? true : false;
    }, (error) => {});
  }

  onSubmit() {
    var options = {
      "key": "rzp_test_awg6RqSTi7PC21",
      "amount": "29935", // INR 299.35
      "name": "Acme Corp",
      "description": "A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami",
      "image": "https://example.com/your_logo",
      "order_id": "order_9A33XWu170gUtm",
      "handler": function (response){
          alert(response.razorpay_payment_id);
      },
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com"
      },
      "notes": {
          "address": "note value"
      },
      "theme": {
          "color": "#F37254"
      }
  };
  this.rzp1 = new this.nativeWindow.Razorpay(options);
  this.rzp1.open();
    return;
    this.sharedService.cartBehaviourSubj.subscribe(data => {
      if(data && data['carts'] &&  data['carts'].length) {
        data['carts'].forEach(data => {
          this.listOfCartProducts.push(data._id);
        })
      }
      
    });
    if(this.selectedAddress) {
      this.createOrder(this.selectedAddress);
    }else {
      this.appService.postAddress(this.addressObj, (success)=> {this.createOrder(success.data._id);}, (error)=> {});
    }
    
  }
  createOrder(addressId) {
    let params = { 'cartIds': this.listOfCartProducts, 'address': addressId}
    this.appService.createOrder(params, (success) => {
      this.sharedService.cartBehaviourSubj.next([]);
      this.router.navigateByUrl('/my-orders');
    }, (error)=>{});
  }
}


