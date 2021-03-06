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
  selectedCategoryIndex: number = 0
  title: string = '';
  description: string =  '';
  ngOnInit() {
    this.sharedService.categoryBehaviourSubj.subscribe(data => {
      this.categoryList = data;
      this.activatedRoute.params.subscribe((params: Params) => {
        let category = this.categoryList.find(data => data._id === params['category']);
        this.selectedCategoryIndex = this.categoryList.findIndex(data => data._id === params['category']);
        this.sharedService.headerActiveCategoryBehaviourSubj.next({'categorySelectedMenuIndex': this.selectedCategoryIndex, 'productSelectedMenuIndex': -1})
        if (this.categoryList && this.categoryList.length) {
          this.productsList = category ? category.products : this.categoryList[0].products;  
          this.title = category? category.name : this.categoryList[0].name;
          this.description = category? category.description : this.categoryList[0].description;
        }
      });
      
      
    })
    
    
  }

  getProductsList(selectedCategory) {
    this.title = selectedCategory.name;
    this.description = selectedCategory.description;
    this.productsList = this.categoryList.find(category=> category._id === selectedCategory._id)['products'];
    this.router.navigateByUrl('/category/'+selectedCategory._id)
  }

}
