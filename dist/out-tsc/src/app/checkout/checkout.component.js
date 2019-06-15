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
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { SharedService } from '../common/shared.service';
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(appService, router, sharedService) {
        this.appService = appService;
        this.router = router;
        this.sharedService = sharedService;
        this.listOfUserAddress = [];
        this.addressObj = { "phoneExt": "+91", "state": "TamilNadu" };
        this.listOfCartProducts = [];
        this.showNewForm = false;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.getUserAdderssList();
    };
    CheckoutComponent.prototype.getUserAdderssList = function () {
        var _this = this;
        this.appService.getUserAddress(function (success) {
            _this.listOfUserAddress = success.data;
            _this.showNewForm = (_this.listOfUserAddress && _this.listOfUserAddress.length) ? true : false;
        }, function (error) { });
    };
    CheckoutComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sharedService.cartBehaviourSubj.subscribe(function (data) {
            if (data && data['carts'] && data['carts'].length) {
                data['carts'].forEach(function (data) {
                    _this.listOfCartProducts.push(data._id);
                });
            }
        });
        if (this.selectedAddress) {
            this.createOrder(this.selectedAddress);
        }
        else {
            this.appService.postAddress(this.addressObj, function (success) { _this.createOrder(success.data._id); }, function (error) { });
        }
    };
    CheckoutComponent.prototype.createOrder = function (addressId) {
        var _this = this;
        var params = { 'cartIds': this.listOfCartProducts, 'address': addressId };
        this.appService.createOrder(params, function (success) {
            _this.sharedService.cartBehaviourSubj.next([]);
            _this.router.navigateByUrl('/my-orders');
        }, function (error) { });
    };
    CheckoutComponent = __decorate([
        Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
        }),
        __metadata("design:paramtypes", [AppService, Router, SharedService])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map