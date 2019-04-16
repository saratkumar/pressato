import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {}

  
  navigateTo(path) {
    this.route.navigate([path]);
  }

}
