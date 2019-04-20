import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpService } from './common/http.service'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private httpService: HttpService
  ) { }

  appServiceConst = {
    'login' : environment.loginService
    
  }

  postLoginUser(data, successFn, errorFn) {
    return this.httpService.postHttp(this.appServiceConst.login, data, successFn, errorFn);
  }

  postNewUser(data, successFn, errorFn) {
    return this.httpService.postHttp(this.appServiceConst.login, data, successFn, errorFn);
  }
}
