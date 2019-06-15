var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../../../app/app.service';
import { SharedService } from '../shared.service';
var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(appService, sharedService) {
        this.appService = appService;
        this.sharedService = sharedService;
        this.newUserObj = {};
        this.showTermsandConditionsError = false;
        this.showPasswordError = false;
        this.signIn = new EventEmitter();
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.newUserObj = {};
    };
    NewUserComponent.prototype.onSignIn = function () {
        this.signIn.emit();
    };
    NewUserComponent.prototype.onSignUp = function () {
        var _this = this;
        this.showTermsandConditionsError = false;
        this.showPasswordError = false;
        if (this.newUserObj.termsAndConditions && this.passwordCheck()) {
            this.appService.postNewUser(this.newUserObj, function (success) {
                jQuery("#myModal").modal("hide");
                _this.sharedService.showNotification.next('signup');
            }, function (error) { });
        }
        else if (!this.newUserObj.termsAndConditions) {
            this.showTermsandConditionsError = true;
        }
        else {
            this.showPasswordError = true;
        }
    };
    NewUserComponent.prototype.passwordCheck = function () {
        return this.newUserObj.password === this.newUserObj.confirmPassword;
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NewUserComponent.prototype, "signIn", void 0);
    NewUserComponent = __decorate([
        Component({
            selector: 'app-new-user',
            templateUrl: './new-user.component.html',
            styleUrls: ['./new-user.component.css']
        }),
        __metadata("design:paramtypes", [AppService,
            SharedService])
    ], NewUserComponent);
    return NewUserComponent;
}());
export { NewUserComponent };
//# sourceMappingURL=new-user.component.js.map