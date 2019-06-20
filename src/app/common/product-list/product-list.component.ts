import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { SharedService } from '../shared.service';
declare var jQuery: any;
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
    jQuery('[data-toggle="tooltip"]').tooltip();
    console.log(this.productsList);
  }


  addToCart(product) {
    this.sharedService.addItemToCart(product);
  }

  getProductIdsFromCombo(ev, product) {
    product.productMeta = ev;
    this.sharedService.addItemToCart(product);
  }

}
