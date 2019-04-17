import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() description: string;
  @Input() products: {}[];
  @Input() title;
  constructor() {
  }

  ngOnInit() {
  }

}
