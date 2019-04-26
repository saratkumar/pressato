import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  categorySelectedMenuIndex: number = -1;
  productSelectedMenuIndex: number = -1;
  categoryId: any;
  productId: any;
  constructor(private appService: AppService, private router: Router, private sharedService: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCategoryList();
    this.sharedService.authBehaviourSubj.subscribe(data => {
      let token = localStorage.getItem('token');
      this.isUserLoggedIn = token ? true : false;
      this.isUserLoggedIn && this.getCurrentUserDetail();
    });
    this.sharedService.cartBehaviourSubj.subscribe(data => {
      this.orderCount = data;
    });

    
    
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
      let tempUrl = this.router.url.split('/');
      this.appService.getProduct((success) => {
        this.sharedService.setProductList(success.data);
        this.categoryList.forEach((category, index) => {
          this.categorySelectedMenuIndex = (this.categorySelectedMenuIndex < 0 && category._id === tempUrl[2]) ? index : this.categorySelectedMenuIndex;
          category.products = success.data.filter(el => el.category === category._id);
          this.productSelectedMenuIndex = this.productSelectedMenuIndex < 0 ? category.products.findIndex(data => data._id === tempUrl[3]) : this.productSelectedMenuIndex;
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
      this.sharedService.cartBehaviourSubj.next([]);
      this.router.navigateByUrl('');

    }, (error) => {});
  }
}
