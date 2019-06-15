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
import { SharedService } from '../common/shared.service';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
var CartComponent = /** @class */ (function () {
    function CartComponent(sharedService, appService, router) {
        this.sharedService = sharedService;
        this.appService = appService;
        this.router = router;
        this.proceedFurther = false;
        this.listOfOrder = [];
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getCartDetails();
        }, 200);
    };
    CartComponent.prototype.getCartDetails = function () {
        var _this = this;
        var products = this.sharedService.getProductList();
        this.appService.getCurrentUserOrderDetail(function (success) {
            _this.sharedService.cartBehaviourSubj.next(success.data);
            _this.listOfOrder = [];
            if (success.data && success.data.carts) {
                success.data.carts.forEach(function (cart) {
                    products.forEach(function (prod) {
                        if (prod._id === cart.product) {
                            prod.order = cart;
                            _this.listOfOrder.push(prod);
                        }
                    });
                });
            }
        }, function (error) { });
    };
    CartComponent.prototype.addToCart = function (product) {
        this.sharedService.addItemToCart(product);
    };
    CartComponent.prototype.removeFromCart = function (productIndex, order) {
        var _this = this;
        this.appService.deleteProductFromCart(order, function (success) {
            _this.getCartDetails();
        }, function (error) { });
    };
    CartComponent.prototype.routeToCategory = function () {
        var categoryId = this.sharedService.getCategoryList()[0]['_id'];
        this.router.navigateByUrl('/category/' + categoryId);
    };
    CartComponent = __decorate([
        Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        }),
        __metadata("design:paramtypes", [SharedService, AppService, Router])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=cart.component.js.map