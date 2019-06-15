var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { SharedService } from '../shared.service';
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(router, appService, activatedRoute, sharedService) {
        this.router = router;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.addToCart = function (product) {
        this.sharedService.addItemToCart(product);
    };
    __decorate([
        Input('productsList'),
        __metadata("design:type", Array)
    ], ProductListComponent.prototype, "productsList", void 0);
    ProductListComponent = __decorate([
        Component({
            selector: 'app-products',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.css']
        }),
        __metadata("design:paramtypes", [Router, AppService, ActivatedRoute, SharedService])
    ], ProductListComponent);
    return ProductListComponent;
}());
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map