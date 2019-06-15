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
import { AppService } from '../app.service';
import { SharedService } from '../common/shared.service';
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, appService, activatedRoute, sharedService) {
        this.router = router;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.currentTab = 'ingredients';
        this.listOfRelatedProduct = [];
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.ScrollToTop();
        this.activatedRoute.params.subscribe(function (params) {
            _this.appService.getProductById(params['product'], function (success) {
                _this.productDetails = success.data;
                _this.productDetails.quantity = 1;
            }, function (error) { });
            _this.appService.getRelatedProducts(params['category'], params['product'], function (success) {
                _this.listOfRelatedProduct = success.data;
                _this.listOfRelatedProduct.forEach(function (product) {
                    product.quantity = 1;
                });
            }, function (error) { });
        });
    };
    ProductDetailsComponent.prototype.tabChange = function (tab) {
        this.currentTab = tab;
    };
    ProductDetailsComponent.prototype.addToCart = function (product) {
        this.sharedService.addItemToCart(product);
    };
    ProductDetailsComponent.prototype.goToRelatedProduct = function (product) {
        this.sharedService.ScrollToTop();
    };
    ProductDetailsComponent = __decorate([
        Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.css']
        }),
        __metadata("design:paramtypes", [Router, AppService, ActivatedRoute, SharedService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map