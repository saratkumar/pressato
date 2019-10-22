import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  url = environment.devUrl + '/api/Login/Savesresponse';
  constructor(
    private http: HttpClient
  ) { }

  Savesresponse(response) {
    return this.http.post(this.url, response);
  }
}
