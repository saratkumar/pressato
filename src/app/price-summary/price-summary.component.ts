import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

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
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.cartBehaviourSubj.subscribe(data => {
      this.totalPrice = data['totalPrice'];
      this.isShippingFree = data['isShippingFree'];
      this.shippingAmt = this.isShippingFree ? 0 : 250;
    });
  }

}
