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
import { HttpClient } from "@angular/common/http";
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getHttp = function (apiUrl, successFunc, errorFunc) {
        return this.http.get(apiUrl).subscribe(successFunc, errorFunc);
    };
    HttpService.prototype.postHttp = function (apiUrl, data, successFunc, errorFunc) {
        return this.http.post(apiUrl, data).subscribe(successFunc, errorFunc);
    };
    HttpService.prototype.putHttp = function (apiUrl, data, successFunc, errorFunc) {
        return this.http.put(apiUrl, data).subscribe(successFunc, errorFunc);
    };
    HttpService.prototype.deleteHttp = function (apiUrl, successFunc, errorFunc, data) {
        return this.http.delete(apiUrl).subscribe(successFunc, errorFunc);
    };
    HttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map