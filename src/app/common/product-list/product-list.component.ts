import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  @Input('productsList') productsList: Array<any>;
  constructor(public router: Router, private appService: AppService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.productsList.forEach(product => {
        product.quantity = product.quantity ? product.quantity : 1;
      });  
    }, 300);
    
  }


  addToCart(product) {
    this.sharedService.addItemToCart(product);
  }

}
