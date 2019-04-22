import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SharedService } from '../common/shared.service';
import { AppService } from '../app.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public router: Router, private appService: AppService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }
  categoryList: Array<any> = [];
  productsList: Array<any> = [];
  title: string = '';
  description: string =  '';
  ngOnInit() {
    this.sharedService.categoryBehaviourSubj.subscribe(data => {
      this.categoryList = data;
      if (this.categoryList && this.categoryList.length) {
        this.productsList = this.categoryList[0].products;  
        this.title = this.categoryList[0].name;
        this.description = this.categoryList[0].description;
      }
      
    })
    // this.activatedRoute.params.subscribe((params: Params) => {
    // });
    
  }

  getProductsList(selectedCategory) {
    this.title = selectedCategory.name;
    this.description = selectedCategory.description;
    this.productsList = this.categoryList.find(category=> category._id === selectedCategory._id)['products'];
    this.router.navigateByUrl('/'+selectedCategory._id)
  }

}
