import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) { }


  getHttp(apiUrl, successFunc, errorFunc) {
    return this.http.get(apiUrl).subscribe(successFunc, errorFunc);
  }

  postHttp(apiUrl, data, successFunc, errorFunc) {
    return this.http.post(apiUrl, data).subscribe(successFunc, errorFunc);
  }

  deleteHttp(apiUrl, successFunc, errorFunc) {
    return this.http.delete(apiUrl).subscribe(successFunc, errorFunc);
  }
}
