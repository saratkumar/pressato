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
    'login' : environment.devUrl +  '/v1/sessions',
    'logout': environment.devUrl + '/v1/sessions',
    'newUser': environment.devUrl + '/v1/users',
    'category': environment.devUrl + '/v1/category',
    'products': environment.devUrl + '/v1/products',
    'productOnCategory': environment.devUrl + '/v1/products/category/',
    'relatedProduct': environment.devUrl + '/v1/products/category/',
  }

  postLoginUser(data, successFn, errorFn) {
    return this.httpService.postHttp(this.appServiceConst.login, data, successFn, errorFn);
  }

  postNewUser(data, successFn, errorFn) {
    return this.httpService.postHttp(this.appServiceConst.newUser, data, successFn, errorFn);
  }

  getCategory(successFn, errorFn) {
    return this.httpService.getHttp(this.appServiceConst.category, successFn, errorFn);    
  }

  getCategoryById(id, successFn, errorFn) {
    return this.httpService.getHttp(this.appServiceConst.category + '/' + id, successFn, errorFn);    
  }

  getProduct(successFn, errorFn) {
    return this.httpService.getHttp(this.appServiceConst.products, successFn, errorFn);    
  }

  getProductById(id, successFn, errorFn) {
    return this.httpService.getHttp(this.appServiceConst.products + '/' + id, successFn, errorFn);    
  }

  getCategoryBasedProduct(categoryId, errorFn, successFn) {
    return this.httpService.getHttp(this.appServiceConst.productOnCategory + categoryId, successFn, errorFn);
  }

  
  getRelatedProducts(categoryId, productId, successFn, errorFn) {
    return this.httpService.getHttp(this.appServiceConst.relatedProduct + categoryId +'/product/' +productId, successFn, errorFn);
  }

  logout(successFn, errorFn) {
    return this.httpService.deleteHttp(this.appServiceConst.logout, successFn, errorFn);
  }
  
}
