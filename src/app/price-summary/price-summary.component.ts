import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-price-summary',
  templateUrl: './price-summary.component.html',
  styleUrls: ['./price-summary.component.css']
})
export class PriceSummaryComponent implements OnInit {
  couponCode: string = ''
  totalPrice: any;
  isShippingFree: boolean = false;
  shippingAmt: number = 0;
  showCouponError: boolean = false;
  price: any;
  constructor(private sharedService: SharedService, private appService: AppService) { }

  ngOnInit() {
    this.sharedService.cartBehaviourSubj.subscribe(data => {
      this.price = data['price'];
      this.totalPrice = data['totalPrice'];
      this.isShippingFree = data['isShippingFree'];
      this.shippingAmt = data['deliveryCharge'] ? data['deliveryCharge'] : 0
    });
  }

  applyCoupon() {
    this.appService.getApplyCoupon(this.couponCode, (success) => {}, (error)=> {
      this.showCouponError = true;
    });
  }

}
