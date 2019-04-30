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
  constructor(private appService: AppService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getUserAdderssList();
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
      this.router.navigateByUrl('/my-orders');
    }, (error)=>{});
  }
}


