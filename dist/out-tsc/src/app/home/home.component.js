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
var HomeComponent = /** @class */ (function () {
    function HomeComponent(sharedService, appService) {
        this.sharedService = sharedService;
        this.appService = appService;
        this.listOfCategory = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.categoryBehaviourSubj.subscribe(function (data) {
            _this.listOfCategory = data;
            _this.listOfCategory.forEach(function (data) {
                data.hide = data.name.indexOf('package') > -1 ? true : false;
            });
        });
        this.sharedService.headerActiveCategoryBehaviourSubj.next({ 'categorySelectedMenuIndex': -1, 'productSelectedMenuIndex': -1 });
    };
    HomeComponent.prototype.subscribe = function () {
        var _this = this;
        var params = {
            email: this.email,
            name: this.userName,
            phoneNo: this.phone
        };
        this.appService.postSubscription(params, function (success) {
            _this.email = '';
            _this.userName = '';
            _this.phone = '';
            _this.sharedService.showNotification.next('subscription');
        }, function (error) { });
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [SharedService,
            AppService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map