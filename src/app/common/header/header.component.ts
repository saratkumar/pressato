import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showSideMenu: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.showSideMenu = !this.showSideMenu;
    this.showSideMenu ? document.getElementById("mySidenav").style.width = "250px" : document.getElementById("mySidenav").style.width = "0";
  }
}
