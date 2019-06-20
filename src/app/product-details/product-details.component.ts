import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../app.service';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentTab: string = 'ingredients';
  listOfRelatedProduct: Array<any> = [];
  productDetails: any;
  constructor(public router: Router, private appService: AppService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.ScrollToTop();
    this.activatedRoute.params.subscribe((params: Params) => {
      this.appService.getProductById(params['product'], (success) => {
        this.productDetails = success.data;
        this.productDetails.quantity = 1;
        this.productDetails.listOfIngredient = this.productDetails.ingredient && this.productDetails.ingredient.split(',');
        this.productDetails.nutrient = this.productDetails.nutrient && this.productDetails.nutrient.split(',');
        this.productDetails.dressing = this.productDetails.dressing && this.productDetails.dressing.split(',');
      }, (error) => {});
      this.appService.getRelatedProducts(params['category'], params['product'], (success) => {
        this.listOfRelatedProduct = success.data;
        this.listOfRelatedProduct.forEach(product => {
          product.quantity = 1;
        })
      }, (error)=> {});
    });
  }


  tabChange(tab) {
    this.currentTab = tab;
  }

  addToCart(product) {
    this.sharedService.addItemToCart(product);
  }

  goToRelatedProduct(product) {
    this.sharedService.ScrollToTop();
  }

  getProductIdsFromCombo(ev, product) {
    product.productMeta = ev;
    this.sharedService.addItemToCart(product);
  }
}
