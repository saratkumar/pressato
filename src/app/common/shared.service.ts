import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
categoryBehaviourSubj = new BehaviorSubject([]);
authBehaviourSubj = new BehaviorSubject(false);
categoryList: Array<any> = [];
  constructor() { }


setCategoryList(categoryList) {
  this.categoryList = categoryList;
  this.categoryBehaviourSubj.next(this.categoryList)
}  

getCategoryList() {
  return this.categoryList;
}

setAuth(authDetails: any) {
  this.authBehaviourSubj.next(true);
}


}
