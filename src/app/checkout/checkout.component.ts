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
  addressObj: any = {"phoneExt": "+91",};
  listOfCartProducts: any = [];
  constructor(private appService: AppService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.sharedService.cartBehaviourSubj.subscribe(data => {
      if(data && data['carts'] &&  data['carts'].length) {
        data['carts'].forEach(data => {
          this.listOfCartProducts.push(data._id);
        })
      }
      
    });
    this.appService.postAddress(this.addressObj, (success)=> {
      let params = { 'cartIds': this.listOfCartProducts, 'address': success.data._id}
      this.appService.createOrder(params, (success) => {
        this.sharedService.cartBehaviourSubj.next([]);
        this.router.navigateByUrl('/my-orders');
      }, (error)=>{});
      
    }, (error)=> {});
  }

}
