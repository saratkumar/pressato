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
var PriceSummaryComponent = /** @class */ (function () {
    function PriceSummaryComponent(sharedService, appService) {
        this.sharedService = sharedService;
        this.appService = appService;
        this.couponCode = '';
        this.isShippingFree = false;
        this.shippingAmt = 0;
        this.showCouponError = false;
    }
    PriceSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.cartBehaviourSubj.subscribe(function (data) {
            _this.totalPrice = data['totalPrice'];
            _this.isShippingFree = data['isShippingFree'];
            _this.shippingAmt = data['deliveryCharge'] ? data['deliveryCharge'] : 0;
        });
    };
    PriceSummaryComponent.prototype.applyCoupon = function () {
        var _this = this;
        this.appService.getApplyCoupon(this.couponCode, function (success) { }, function (error) {
            _this.showCouponError = true;
        });
    };
    PriceSummaryComponent = __decorate([
        Component({
            selector: 'app-price-summary',
            templateUrl: './price-summary.component.html',
            styleUrls: ['./price-summary.component.css']
        }),
        __metadata("design:paramtypes", [SharedService, AppService])
    ], PriceSummaryComponent);
    return PriceSummaryComponent;
}());
export { PriceSummaryComponent };
//# sourceMappingURL=price-summary.component.js.map