import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { SharedService } from '../common/shared.service';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  listOfUserAddress: Array<any> = [];
  addressObj: any = {'phoneExt': '+91', 'state': 'TamilNadu'};
  listOfCartProducts: any = [];
  selectedAddress: any;
  showNewForm: boolean = false;
  rzp1: any;
  totalPrice: any;
  options: any;
  userInfo: any = { provider: ''}
  PROVIDER = {'GUEST': 'guest'};
  constructor(
    private appService: AppService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getUserAdderssList();
    this.sharedService.cartBehaviourSubj.subscribe(data => {
      this.totalPrice = data['totalPrice'] + data['deliveryCharge'];
      this.options =  {
        'key': environment.razorPayId,
        'amount': this.totalPrice,
        'name': 'Pressato',
        'handler': (response) => {
          this.createOrder(response);
        },
        // 'callback_url': 'http://localhost:4200/my-orders',
        /**
          * You can track the modal lifecycle by * adding the below code in your options
          */
        'modal': {
            'ondismiss': function(){
                console.log('Checkout form closed');
            }
        }
    };
    });
    this.sharedService.userInfo.subscribe(data => {
      this.userInfo = data;
      this.addressObj.email = this.userInfo && this.userInfo['email'];  
    })
    // setTimeout(() => {

    //   this.userInfo = this.sharedService.getUserData();
    //   this.addressObj.email = this.userInfo &&this.userInfo['email'];  
    // }, 500);
    
    
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
      this.rzp1 = new this.nativeWindow.Razorpay(this.options);
      this.rzp1.open();
    }else {
      this.appService.postAddress(this.addressObj, (success)=> {
        this.selectedAddress = success.data._id;
        this.rzp1 = new this.nativeWindow.Razorpay(this.options);
        this.rzp1.open();
      }, (error) => {});
    }
    
  }
  createOrder(response) {
    const params = {
      'orderObj': { 'cartIds': this.listOfCartProducts, 'address': this.selectedAddress},
      'trans': { 'paymentId': response.razorpay_payment_id, 'gateway': 'sds', 'isSuccess': true}
    };
    this.appService.createOrder(params, (success) => {
    setTimeout(() => {
      this.sharedService.cartBehaviourSubj.next([]);
      this.router.navigateByUrl('');
    }, 100);
    }, (error) => {});
  }

  // routeToMyOrder() {
  //   this.router.navigateByUrl('/my-orders');
  // }
}


