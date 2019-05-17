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
  options = {
    "key": "rzp_test_YxH5LHChmDM45y",
    "amount": "29935",
    "name": "Acme Corp",
    "description": "A Wild Sheep Chase is the third novel by Japanese author Haruki Murakami",
    "image": "http://example.com/your_logo.png",
    "handler": function (response){
        this.routeToMyOrder();
        console.log(response.razorpay_payment_id);
    },
    "callback_url": 'http://localhost:4200/my-orders',
    /**
      * You can track the modal lifecycle by * adding the below code in your options
      */
    "modal": {
        "ondismiss": function(){
            console.log('Checkout form closed');
        }
    }
};
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
      this.rzp1 = new this.nativeWindow.Razorpay(this.options);
      this.rzp1.open();
      
    }, (error)=>{});
  }

  routeToMyOrder() {
    this.router.navigateByUrl('/my-orders');
  }
}


