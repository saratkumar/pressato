import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-probiotics',
  templateUrl: './probiotics.component.html',
  styleUrls: ['./probiotics.component.css']
})
export class ProbioticsComponent implements OnInit {
  title: string;
  description: string;
  products: {}[];
  constructor() {
    this.title = 'Probiotics'
    this.description = 'Our probiotic drink is loaded with good, helpful bacteria from yogurt, and a well curated selection of fruits and veggies that are high in nutritive value and great in taste! The bacteria in yogurt is good for your gut as it has several digestive benefits and allergies. The fruits and veggies in our probiotic drink help promote digestive wellness and load your body with minerals to keep infections out of the way. Regularly consumed our probiotics help in regulating blood sugar levels and moods.'
    this.products = [
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/xoxo-300x300.jpg",
        "name": "XOXO",
        "code": "₹ 135",
        "symbol": "₹",
        "price": "135",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Yogurt, Coriander, Mint, Curry Leaves, Celery, Green Chili, Spice Mix, Himalayan Salt"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/assassin-300x300.jpg",
        "name": "Assassin",
        "code": "₹ 135",
        "symbol": "₹",
        "price": "135",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Yogurt, Strawberry, honey"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/halogen-300x300.jpg",
        "name": "Halogen",
        "code": "₹ 135",
        "symbol": "₹",
        "price": "135",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Yogurt, Mango"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/prob-300x300.jpg",
        "name": "Mario",
        "code": "₹ 135",
        "symbol": "₹",
        "price": "135",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Yogurt, Musk Melon, Papaya, Orange, Psyllium husk"
      }
    ]
  }

  ngOnInit() {
  }

}
