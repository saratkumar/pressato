import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from "./../common/product-list/product-list.component";
@Component({
  selector: 'app-coldpress',
  templateUrl: './coldpress.component.html',
  styleUrls: ['./coldpress.component.css']
})
export class ColdpressComponent implements OnInit {
  description: string;
  title: string;
  products: {}[];
  constructor() {
    this.title = 'Cold pressed'
    this.description = 'Cold-pressed juice is made with a hydraulic press that uses pressure to extract the maximum amount of liquid from raw fresh fruits and vegetables. No additional heat or oxygen is used in the process, meaning that no nutrients are lost in the heat of traditional pasteurization. Fruits and vegetables are great sources of vitamins, minerals and antioxidants. We provide you a way to get a lot of these compounds in one sitting.'
    this.products = [
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      },
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      },
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      },
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      },
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      },
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      },
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      },
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      },
      {
        logo: 'https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg',
        name: 'wild rice party',
        price: '100',
        quantity: '300',
        measuringUnit: 'grams',
        ingredient: 'Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese'
      }
    ]
  }

  ngOnInit() {
  }

}
