var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppService } from '../app.service';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';
var SharedService = /** @class */ (function () {
    function SharedService(appService, platformId, window, localStorage) {
        this.appService = appService;
        this.platformId = platformId;
        this.window = window;
        this.localStorage = localStorage;
        this.categoryBehaviourSubj = new BehaviorSubject([]);
        this.authBehaviourSubj = new BehaviorSubject(false);
        this.cartBehaviourSubj = new BehaviorSubject([]);
        this.showNotification = new BehaviorSubject('');
        this.headerActiveCategoryBehaviourSubj = new BehaviorSubject({ 'categorySelectedMenuIndex': -1, 'productSelectedMenuIndex': -1 });
        this.categoryList = [];
        this.orderDetail = [];
    }
    SharedService.prototype.setCategoryList = function (categoryList) {
        this.categoryList = categoryList;
        this.categoryBehaviourSubj.next(this.categoryList);
    };
    SharedService.prototype.getCategoryList = function () {
        return this.categoryList;
    };
    SharedService.prototype.setProductList = function (products) {
        this.productList = products;
    };
    SharedService.prototype.getProductList = function () {
        return this.productList;
    };
    SharedService.prototype.setAuth = function (authDetails) {
        this.authBehaviourSubj.next(true);
    };
    SharedService.prototype.setOrderDetail = function (orderDetail) {
        this.orderDetail = orderDetail;
        this.cartBehaviourSubj.next(orderDetail);
    };
    SharedService.prototype.getOrderDetail = function () {
        return this.orderDetail;
    };
    SharedService.prototype.setUserData = function (userObj) {
        this.userData = userObj;
    };
    SharedService.prototype.getUserData = function () {
        return this.userData;
    };
    SharedService.prototype.addItemToCart = function (product) {
        var _this = this;
        var params = this.orderDetail.carts.find(function (data) { return data.product === product._id; });
        var method;
        if (params) {
            params.quantity = product.quantity;
            method = 'updateCart';
        }
        else {
            method = 'postAddToCart';
            params = { "isDeleted": false, "isBilled": false, "quantity": product.quantity, "additionalNotes": "", "address": "5cbe10be2771967f4327f3d4", "user": this.userData._id, "product": product._id };
        }
        this.appService[method](params, function (successFn) {
            _this.appService.getCurrentUserOrderDetail(function (success) {
                _this.cartBehaviourSubj.next(success.data);
                if (method === 'postAddToCart') {
                    _this.showNotification.next('cart');
                }
            }, function (error) { });
        }, function (error) { });
    };
    SharedService.prototype.ScrollToTop = function () {
        if (isPlatformBrowser(this.platformId)) {
            var scrollToTop_1 = window.setInterval(function () {
                var pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 20); // how far to scroll on each step
                }
                else {
                    window.clearInterval(scrollToTop_1);
                }
            }, 16);
        }
    };
    SharedService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(1, Inject(PLATFORM_ID)), __param(2, Inject(WINDOW)), __param(3, Inject(LOCAL_STORAGE)),
        __metadata("design:paramtypes", [AppService,
            Object, Window, Object])
    ], SharedService);
    return SharedService;
}());
export { SharedService };
//# sourceMappingURL=shared.service.js.map