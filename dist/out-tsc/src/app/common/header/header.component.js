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
import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';
import { NotifierService } from 'angular-notifier';
import { Inject, PLATFORM_ID } from '@angular/core';
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';
import { isPlatformBrowser } from '@angular/common';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appService, router, sharedService, activatedRoute, notifierService, platformId, window, localStorage) {
        this.appService = appService;
        this.router = router;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.platformId = platformId;
        this.window = window;
        this.localStorage = localStorage;
        this.showSideMenu = false;
        this.signIn = false;
        this.isUserLoggedIn = false;
        this.categoryList = [];
        this.orderDetail = [];
        this.categorySelectedMenuIndex = -1;
        this.productSelectedMenuIndex = -1;
        this.showAddedCartAlert = false;
        this.notifier = notifierService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategoryList();
        this.sharedService.authBehaviourSubj.subscribe(function (data) {
            var token;
            if (isPlatformBrowser(_this.platformId)) {
                token = _this.localStorage.getItem('token');
            }
            _this.isUserLoggedIn = token ? true : false;
            _this.isUserLoggedIn && _this.getCurrentUserDetail();
        });
        this.sharedService.cartBehaviourSubj.subscribe(function (data) {
            _this.orderCount = data;
        });
        this.sharedService.showNotification.subscribe(function (data) {
            if (data === 'cart') {
                _this.notifier.hideAll();
                _this.notifier.notify('error', 'Item successfully added to cart.');
            }
            else if (data === 'signup') {
                _this.notifier.hideAll();
                _this.notifier.notify('success', 'Activation link successfully sent to your mail id.');
            }
            else if (data === 'subscription') {
                _this.notifier.hideAll();
                _this.notifier.notify('success', 'Subscribed Successfully');
            }
            else if (data === 'contact') {
                _this.notifier.hideAll();
                _this.notifier.notify('success', 'Thank you for your queries. We will get back to you soon');
            }
        });
        this.sharedService.headerActiveCategoryBehaviourSubj.subscribe(function (data) {
            _this.categorySelectedMenuIndex = data.categorySelectedMenuIndex;
            _this.productSelectedMenuIndex = data.productSelectedMenuIndex;
        });
    };
    HeaderComponent.prototype.getCurrentUserDetail = function () {
        var _this = this;
        this.appService.getCurrentUser(function (success) {
            _this.userObj = success.data;
            _this.sharedService.setUserData(_this.userObj);
            _this.appService.getCurrentUserOrderDetail(function (success) {
                _this.orderCount = success.data;
                _this.sharedService.setOrderDetail(_this.orderCount);
            }, function (error) { });
        }, function (error) { });
    };
    HeaderComponent.prototype.getOrderDetails = function () {
        throw new Error("Method not implemented.");
    };
    HeaderComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.appService.getCategory(function (success) {
            _this.categoryList = success.data;
            var tempUrl = _this.router.url.split('/');
            _this.appService.getProduct(function (success) {
                _this.sharedService.setProductList(success.data);
                _this.categoryList.forEach(function (category, index) {
                    _this.categorySelectedMenuIndex = (_this.categorySelectedMenuIndex < 0 && category._id === tempUrl[2]) ? index : _this.categorySelectedMenuIndex;
                    category.products = success.data.filter(function (el) { return el.category === category._id; });
                    category.products.forEach(function (product) {
                        product.quantity = product.quantity ? product.quantity : 1;
                    });
                    _this.productSelectedMenuIndex = _this.productSelectedMenuIndex < 0 ? category.products.findIndex(function (data) { return data._id === tempUrl[3]; }) : _this.productSelectedMenuIndex;
                });
                _this.sharedService.setCategoryList(_this.categoryList);
            }, function (error) { });
        }, function (error) { });
    };
    HeaderComponent.prototype.openNav = function () {
        this.showSideMenu = !this.showSideMenu;
        this.showSideMenu ? document.getElementById("mySidenav").style.width = "100%" : document.getElementById("mySidenav").style.width = "0";
    };
    HeaderComponent.prototype.routeToCategoryPage = function (category) {
        this.router.navigateByUrl('/categroy/' + category.replace(' ', '-'));
    };
    HeaderComponent.prototype.onLogout = function () {
        var _this = this;
        this.appService.logout(function (success) {
            if (isPlatformBrowser(_this.platformId)) {
                _this.localStorage.removeItem('token');
            }
            _this.sharedService.authBehaviourSubj.next(false);
            _this.sharedService.cartBehaviourSubj.next([]);
            _this.router.navigateByUrl('');
        }, function (error) { });
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __param(5, Inject(PLATFORM_ID)), __param(6, Inject(WINDOW)), __param(7, Inject(LOCAL_STORAGE)),
        __metadata("design:paramtypes", [AppService, Router, SharedService, ActivatedRoute,
            NotifierService,
            Object, Window, Object])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map