import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared.service';
declare var jQuery: any;

@Component({
  selector: 'app-combo-popup',
  templateUrl: './combo-popup.component.html',
  styleUrls: ['./combo-popup.component.css']
})
export class ComboPopupComponent implements OnInit {
  listOfCategory: any;
  categoryList: any;
  productList: any;
  @Input('comboName') comboName: any;
  @Input('isProductDetail') isProductDetail: any;
  @Output('productIds') productIds = new EventEmitter();
  selectedValue: any = {};
  constructor(private sharedService: SharedService) { }

  ngOnInit() {

  }

  getComboDetails() {
    let categoryList;
      let productList;
      switch (this.comboName) {
        case 'salad + smoothie':
          categoryList = JSON.parse(JSON.stringify(this.sharedService.getCategoryList()));
          productList = JSON.parse(JSON.stringify(this.sharedService.getProductList()));
          this.listOfCategory = categoryList.filter((data: any) =>
            (data.name === 'salads' || data.name === 'smoothies'));
          this.listOfCategory.forEach(category => {
            category.products = [];
            productList.forEach(product => {
              if (
                ((category._id === product.category && (product.ingredient.includes('Eggs'))) ||
                  (category._id === product.category && product.ingredient.includes('Chicken') ||
                    (category._id === product.category && product.ingredient.includes('Panner')))) ||
                (category._id === product.category && (!product.ingredient.includes('Whey')))) {
                category.products.push(product);
              }
            });
          });
          break;
        case 'salad + whey smoothies':
          categoryList = JSON.parse(JSON.stringify(this.sharedService.getCategoryList()));
          productList = JSON.parse(JSON.stringify(this.sharedService.getProductList()));
          this.listOfCategory = categoryList.filter((data: any) =>
            (data.name === 'salads' || data.name === 'smoothies'));
          this.listOfCategory.forEach(category => {
            category.products = [];
            productList.forEach(product => {
              if (
                ((category._id === product.category && (product.ingredient.includes('Eggs'))) ||
                  (category._id === product.category && product.ingredient.includes('Chicken') ||
                    (category._id === product.category && product.ingredient.includes('Panner')))) ||
                (category._id === product.category && (product.ingredient.includes('Whey')))) {
                category.products.push(product);
              }
            });
          });
          break;
        case 'salad + cold pressed juice':
          categoryList = JSON.parse(JSON.stringify(this.sharedService.getCategoryList()));
          productList = JSON.parse(JSON.stringify(this.sharedService.getProductList()));
          this.listOfCategory = categoryList.filter((data: any) =>
            (data.name === 'salads' || data.name === 'cold pressed juices'));
          this.listOfCategory.forEach(category => {
            category.products = [];
            productList.forEach(product => {
              if (
                ((category._id === product.category && (product.ingredient.includes('Eggs'))) ||
                  (category._id === product.category && product.ingredient.includes('Chicken') ||
                    (category._id === product.category && product.ingredient.includes('Panner')))) ||
                (category._id === product.category && (product.intention.includes('cold-pressed')))) {
                category.products.push(product);
              }
            });
          });
          break;
        case 'salad + probiotics':
          categoryList = JSON.parse(JSON.stringify(this.sharedService.getCategoryList()));
          productList = JSON.parse(JSON.stringify(this.sharedService.getProductList()));
          this.listOfCategory = categoryList.filter((data: any) =>
            (data.name === 'salads' || data.name === 'probiotics'));
          this.listOfCategory.forEach(category => {
            category.products = [];
            productList.forEach(product => {
              if (
                ((category._id === product.category && (product.ingredient.includes('Eggs'))) ||
                  (category._id === product.category && product.ingredient.includes('Chicken') ||
                    (category._id === product.category && product.ingredient.includes('Panner')))) ||
                (category._id === product.category && (product.intention.includes('probiotics')))) {
                category.products.push(product);
              }
            });
          });
          break;
        case 'cold pressed juice + power bowl':
          categoryList = JSON.parse(JSON.stringify(this.sharedService.getCategoryList()));
          productList = JSON.parse(JSON.stringify(this.sharedService.getProductList()));
          this.listOfCategory = categoryList.filter((data: any) =>
            (data.name === 'salads' || data.name === 'cold pressed juices'));
          this.listOfCategory.forEach(category => {
            category.products = [];
            productList.forEach(product => {
              if ((category._id === product.category && (product.name.includes('power bowl'))) ||
                (category._id === product.category && (product.intention.includes('cold-pressed')))) {
                category.products.push(product);
              }
            });
          });
          break;
      }
      console.log(this.listOfCategory, 'listOfCategory');
      (this.listOfCategory && this.listOfCategory.length) && jQuery('#commonPopup').modal('toggle');
  }

  proceedFurther() {
    const selectedProduct = [];
    // tslint:disable-next-line: forin
    for (const key in this.selectedValue) {
      selectedProduct.push(key);
    }
    if (selectedProduct.length > 1) {
      this.productIds.emit(selectedProduct);
    }
  }

}
