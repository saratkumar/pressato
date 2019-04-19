import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  currentTab: string = 'ingredients';

  constructor() { }

  ngOnInit() {
  }


  tabChange(tab) {
    this.currentTab = tab;
  }
}
