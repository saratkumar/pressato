var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../common/shared.service';
import { AppService } from '../app.service';
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(router, appService, activatedRoute, sharedService) {
        this.router = router;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.categoryList = [];
        this.productsList = [];
        this.selectedCategoryIndex = 0;
        this.title = '';
        this.description = '';
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.categoryBehaviourSubj.subscribe(function (data) {
            _this.categoryList = data;
            _this.activatedRoute.params.subscribe(function (params) {
                var category = _this.categoryList.find(function (data) { return data._id === params['category']; });
                _this.selectedCategoryIndex = _this.categoryList.findIndex(function (data) { return data._id === params['category']; });
                _this.sharedService.headerActiveCategoryBehaviourSubj.next({ 'categorySelectedMenuIndex': _this.selectedCategoryIndex, 'productSelectedMenuIndex': -1 });
                if (_this.categoryList && _this.categoryList.length) {
                    _this.productsList = category ? category.products : _this.categoryList[0].products;
                    _this.title = category ? category.name : _this.categoryList[0].name;
                    _this.description = category ? category.description : _this.categoryList[0].description;
                }
            });
        });
    };
    CategoryComponent.prototype.getProductsList = function (selectedCategory) {
        this.title = selectedCategory.name;
        this.description = selectedCategory.description;
        this.productsList = this.categoryList.find(function (category) { return category._id === selectedCategory._id; })['products'];
        this.router.navigateByUrl('/category/' + selectedCategory._id);
    };
    CategoryComponent = __decorate([
        Component({
            selector: 'app-category',
            templateUrl: './category.component.html',
            styleUrls: ['./category.component.css']
        }),
        __metadata("design:paramtypes", [Router, AppService, ActivatedRoute, SharedService])
    ], CategoryComponent);
    return CategoryComponent;
}());
export { CategoryComponent };
//# sourceMappingURL=category.component.js.map