var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpService } from './common/http.service';
var AppService = /** @class */ (function () {
    function AppService(httpService) {
        this.httpService = httpService;
        this.appServiceConst = {
            'login': environment.devUrl + '/v1/sessions',
            'logout': environment.devUrl + '/v1/sessions',
            'newUser': environment.devUrl + '/v1/users',
            'category': environment.devUrl + '/v1/category',
            'products': environment.devUrl + '/v1/products',
            'productOnCategory': environment.devUrl + '/v1/products/category/',
            'relatedProduct': environment.devUrl + '/v1/products/category/',
            'currentUser': environment.devUrl + '/v1/users/me',
            'currentUserOrderDetail': environment.devUrl + '/v1/cart/user',
            'cart': environment.devUrl + '/v1/cart',
            'address': environment.devUrl + '/v1/address',
            'order': environment.devUrl + '/v1/order',
            'coupon': environment.devUrl + '/v1/applyCoupon/',
            'userAddress': environment.devUrl + '/v1/address/user',
            'subscription': environment.devUrl + '/v1/subscription',
            'contactUs': environment.devUrl + '/v1/contactus',
        };
    }
    AppService.prototype.postLoginUser = function (data, successFn, errorFn) {
        return this.httpService.postHttp(this.appServiceConst.login, data, successFn, errorFn);
    };
    AppService.prototype.postNewUser = function (data, successFn, errorFn) {
        return this.httpService.postHttp(this.appServiceConst.newUser, data, successFn, errorFn);
    };
    AppService.prototype.getCategory = function (successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.category, successFn, errorFn);
    };
    AppService.prototype.getCategoryById = function (id, successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.category + '/' + id, successFn, errorFn);
    };
    AppService.prototype.getProduct = function (successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.products, successFn, errorFn);
    };
    AppService.prototype.getProductById = function (id, successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.products + '/' + id, successFn, errorFn);
    };
    AppService.prototype.getCategoryBasedProduct = function (categoryId, errorFn, successFn) {
        return this.httpService.getHttp(this.appServiceConst.productOnCategory + categoryId, successFn, errorFn);
    };
    AppService.prototype.getRelatedProducts = function (categoryId, productId, successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.relatedProduct + categoryId + '/product/' + productId, successFn, errorFn);
    };
    AppService.prototype.logout = function (successFn, errorFn) {
        return this.httpService.deleteHttp(this.appServiceConst.logout, successFn, errorFn);
    };
    AppService.prototype.getCurrentUser = function (successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.currentUser, successFn, errorFn);
    };
    AppService.prototype.getCurrentUserOrderDetail = function (successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.currentUserOrderDetail, successFn, errorFn);
    };
    AppService.prototype.postAddToCart = function (data, successFn, errorFn) {
        return this.httpService.postHttp(this.appServiceConst.cart, data, successFn, errorFn);
    };
    AppService.prototype.updateCart = function (data, successFn, errorFn) {
        return this.httpService.putHttp(this.appServiceConst.cart + '/' + data._id, data, successFn, errorFn);
    };
    AppService.prototype.deleteProductFromCart = function (order, successFn, errorFn) {
        return this.httpService.deleteHttp(this.appServiceConst.cart + '/' + order._id, successFn, errorFn, order);
    };
    AppService.prototype.postAddress = function (data, successFn, errorFn) {
        return this.httpService.postHttp(this.appServiceConst.address, data, successFn, errorFn);
    };
    AppService.prototype.createOrder = function (data, successFn, errorFn) {
        return this.httpService.postHttp(this.appServiceConst.order, data, successFn, errorFn);
    };
    AppService.prototype.getUserOrders = function (successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.order + '/user', successFn, errorFn);
    };
    AppService.prototype.getAddress = function (addressId, successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.address + addressId, successFn, errorFn);
    };
    AppService.prototype.getApplyCoupon = function (couponId, successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.coupon + couponId, successFn, errorFn);
    };
    AppService.prototype.getUserAddress = function (successFn, errorFn) {
        return this.httpService.getHttp(this.appServiceConst.userAddress, successFn, errorFn);
    };
    AppService.prototype.postSubscription = function (data, successFn, errorFn) {
        return this.httpService.postHttp(this.appServiceConst.subscription, data, successFn, errorFn);
    };
    AppService.prototype.postContactUs = function (data, successFn, errorFn) {
        return this.httpService.postHttp(this.appServiceConst.contactUs, data, successFn, errorFn);
    };
    AppService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpService])
    ], AppService);
    return AppService;
}());
export { AppService };
//# sourceMappingURL=app.service.js.map