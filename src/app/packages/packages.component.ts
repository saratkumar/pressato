import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  title: string;
  description: string;
  products: {}[];
  constructor() {
    this.title = 'Packages'
    this.description = ''
    this.products = [
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/02/make-300x300.jpg",
        "name": "Make It A Habit",
        "code": "₹ 7,999",
        "symbol": "₹",
        "price": "9,598",
        "noOfDays": "21",
        "benefits": "Cleanse your body of toxins, alkalize it and rev up your metabolism. Choose any 2. Products from our menu and enjoy preservative free, healthy food delivered to you every day for 21 days."
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/02/10-300x300.jpg",
        "name": "10 Day Reset",
        "code": "₹ 3,999",
        "symbol": "₹",
        "price": "4,798",
        "noOfDays": "10",
        "benefits": "A reminder of promised health benefits of high energy without any added sugar. Get rid of piled up toxins and load upon deprived vitamins and minerals"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/02/detox-300x300.jpg",
        "name": "Detox Week",
        "code": "₹ 2,750",
        "symbol": "₹",
        "price": "3,300",
        "noOfDays": "7",
        "benefits": "Feel light in a week. Refuel your body with healthy nutrients and\nantioxidants without depriving yourself. Great way to lose some\nweight before a D day."
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/02/cold_07-300x300.jpg",
        "name": "Cold Pressed Juices",
        "code": "₹ 1,800",
        "symbol": "₹",
        "price": "2,160",
        "noOfDays": "7",
        "benefits": "Two cold pressed juices delivered to you every day from a\nwide range of green, vegetable and fruit juices."
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/02/smoothies-300x300.jpg",
        "name": "Smoothies",
        "code": "₹ 2,499",
        "symbol": "₹",
        "price": "2,998",
        "noOfDays": "7",
        "benefits": "Two smoothies delivered to you every day. Before the workout, after the workout,\nbreakfast replacement – choose to have it at your convenience."
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/02/1-300x300.jpg",
        "name": "One Day Cleanse",
        "code": "₹ 999",
        "symbol": "₹",
        "price": "1,198",
        "noOfDays": "1",
        "benefits": "Choose 5 products from a wide range of smoothies,\njuices, and salads to de-bloat, repair, heal and give your digestive\nsystem its much needed to cleanse from processed food."
      }
    ]
  }


  ngOnInit() {
  }

}
