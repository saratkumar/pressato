import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentTab: string = 'ingredients';
  listOfRelatedProduct: Array<any> = [];
  productDetails: any;
  constructor(public router: Router, private appService: AppService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.appService.getProductById(params['product'], (success) => {
        this.productDetails = success.data;
      }, (error) => {});
      this.appService.getRelatedProducts(params['category'], params['product'], (success) => {
        this.listOfRelatedProduct = success.data;
      }, (error)=> {});
    });
  }


  tabChange(tab) {
    this.currentTab = tab;
  }
}
