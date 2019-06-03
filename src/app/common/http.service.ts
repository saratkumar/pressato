import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  optimusToken: any;
  headerObj: any;
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(LOCAL_STORAGE) private localStorage: any,
  ) {

  }


  getHttp(apiUrl, successFunc, errorFunc) {
    if (!this.optimusToken) {
      if (isPlatformBrowser(this.platformId)) {
        this.optimusToken = this.localStorage.getItem('token');
      }
      if (this.optimusToken) {
        this.headerObj = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-pressato-auth': JSON.parse(this.optimusToken)
          })
        };
      }
    }

    return this.http.get(apiUrl, this.headerObj).subscribe(successFunc, errorFunc);
  }

  postHttp(apiUrl, data, successFunc, errorFunc) {
    if (!this.optimusToken) {
      if (isPlatformBrowser(this.platformId)) {
        this.optimusToken = this.localStorage.getItem('token');
      }
      if (this.optimusToken) {
        this.headerObj = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-pressato-auth': JSON.parse(this.optimusToken)
          })
        };
      }
    }
    return this.http.post(apiUrl, data, this.headerObj).subscribe(successFunc, errorFunc);
  }

  putHttp(apiUrl, data, successFunc, errorFunc) {
    if (!this.optimusToken) {
      if (isPlatformBrowser(this.platformId)) {
        this.optimusToken = this.localStorage.getItem('token');
      }
      if (this.optimusToken) {
        this.headerObj = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-pressato-auth': JSON.parse(this.optimusToken)
          })
        };
      }
    }
    return this.http.put(apiUrl, data, this.headerObj).subscribe(successFunc, errorFunc);
  }

  deleteHttp(apiUrl, successFunc, errorFunc, data?: any) {
    if (!this.optimusToken) {
      if (isPlatformBrowser(this.platformId)) {
        this.optimusToken = this.localStorage.getItem('token');
      }
      if (this.optimusToken) {
        this.headerObj = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-pressato-auth': JSON.parse(this.optimusToken)
          })
        };
      }
    }
    return this.http.delete(apiUrl, this.headerObj).subscribe(successFunc, errorFunc);
  }
}
