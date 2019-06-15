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
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(router) {
        this.router = router;
    }
    TokenInterceptor.prototype.errorCase = function (event) {
        switch (event.status) {
            case 401:
                window.location.href = window.location.origin;
                break;
            // case 403:
            //     this.router.navigateByUrl('/forbidden');
            //     break;
            // case 503:
            //     this.router.navigateByUrl('/serviceUnavailable');
            //     break;
        }
    };
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var headersObj = {};
        var optimusToken = localStorage.getItem('token');
        if (optimusToken) {
            headersObj['x-pressato-auth'] = JSON.parse(optimusToken);
        }
        request = request.clone({
            setHeaders: headersObj
        });
        return next.handle(request).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                var temp = event.body && event.body.data ? event.body.data.token : undefined;
            }
        }, function (err) {
            if (err instanceof HttpErrorResponse) {
                _this.errorCase(err);
            }
        }));
    };
    TokenInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router])
    ], TokenInterceptor);
    return TokenInterceptor;
}());
export { TokenInterceptor };
//# sourceMappingURL=app.interceptor.js.map