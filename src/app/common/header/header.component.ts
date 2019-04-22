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
  constructor(private appService: AppService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getCategoryList();
    this.sharedService.authBehaviourSubj.subscribe(data => {
      this.isUserLoggedIn = data;
    })
    // getProductList();
  }

  getCategoryList() {
    this.appService.getCategory((success)=> {
      this.categoryList = success.data;
      this.appService.getProduct((success) => {
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
