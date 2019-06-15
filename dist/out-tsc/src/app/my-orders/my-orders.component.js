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
var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(sharedService, appService) {
        this.sharedService = sharedService;
        this.appService = appService;
        this.listOfOrders = [];
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.getOrderDetails();
        }, 100);
    };
    MyOrdersComponent.prototype.getOrderDetails = function () {
        var _this = this;
        this.appService.getUserOrders(function (success) {
            _this.listOfOrders = success.data;
            var listOfProductList = _this.sharedService.getProductList();
            _this.listOfOrders.forEach(function (order) {
                order.cartIds.forEach(function (cartData) {
                    listOfProductList.forEach(function (prod) {
                        if (cartData.product === prod._id) {
                            cartData.productDetail = prod;
                        }
                    });
                });
            });
            console.log(_this.listOfOrders, 'afdsafa');
        }, function (error) { });
    };
    MyOrdersComponent = __decorate([
        Component({
            selector: 'app-my-orders',
            templateUrl: './my-orders.component.html',
            styleUrls: ['./my-orders.component.css']
        }),
        __metadata("design:paramtypes", [SharedService, AppService])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());
export { MyOrdersComponent };
//# sourceMappingURL=my-orders.component.js.map