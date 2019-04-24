import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSideMenu: boolean = false;
  signIn: boolean = false;
  isUserLoggedIn: boolean = false;
  categoryList: Array<any> = [];
  userObj: any;
  orderDetail: any =[]
  orderCount: any;
  constructor(private appService: AppService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getCategoryList();
    let token = localStorage.getItem('token');
    this.isUserLoggedIn = token ? true : false;
    this.sharedService.cartBehaviourSubj.subscribe(data => {
      this.orderCount = data;
    });
    this.isUserLoggedIn && this.getCurrentUserDetail();
  }
  getCurrentUserDetail() {
    this.appService.getCurrentUser((success) => {
      this.userObj = success.data;
      this.sharedService.setUserData(this.userObj);
      this.appService.getCurrentUserOrderDetail(this.userObj._id, (success)=> {
        this.orderCount = success.data;
        this.sharedService.setOrderDetail(this.orderCount);
      }, (error)=> {})
    }, (error)=> {});
  }

  getOrderDetails() {
    throw new Error("Method not implemented.");
  }

  getCategoryList() {
    this.appService.getCategory((success)=> {
      this.categoryList = success.data;
      this.appService.getProduct((success) => {
        this.sharedService.setProductList(success.data);
        this.categoryList.forEach(category => {
          category.products = success.data.filter(el => el.category === category._id);
        });
        this.sharedService.setCategoryList(this.categoryList);
      }, (error) => {})
    }, (error)=> {});
  }

  openNav() {
    this.showSideMenu = !this.showSideMenu;
    this.showSideMenu ? document.getElementById("mySidenav").style.width = "100%" : document.getElementById("mySidenav").style.width = "0";
  }

  routeToCategoryPage(category:string) {
    this.router.navigateByUrl('/categroy/' + category.replace(' ', '-'));
  }

  onLogout() {
    this.appService.logout((success) => {
      localStorage.removeItem('token');
      this.sharedService.authBehaviourSubj.next(false);
      this.router.navigateByUrl('');

    }, (error) => {});
  }
}
