import { Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string;
  email:string;
  phone:number
  listOfCategory: any =[];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.categoryBehaviourSubj.subscribe(data => {
      this.listOfCategory = data;
      this.listOfCategory.forEach(data => {
        data.hide = data.name.indexOf('package') > -1 ? true : false;
      })
    });
  }

}
