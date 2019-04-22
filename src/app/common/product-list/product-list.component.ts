import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  @Input('productsList') productsList: Array<any>;
  constructor(public router: Router, private appService: AppService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe((params: Params) => {
    // });
  }

}
