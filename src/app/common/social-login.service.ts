import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  url = environment.devUrl + '/v1/socialLogin';
  constructor(
    private http: HttpClient
  ) { }

  Savesresponse(response) {
    return this.http.post(this.url, response);
  }
}
