import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {
  title: string;
  description: string;
  products: {}[];
  constructor() {
    this.title = 'Smoothies'
    this.description = 'Smoothies are champions in getting essential nutrients in a one quick meal that is filled with adequate calories and saturated with natural saccharinity. Unlike milkshakes and malts, smoothies derive their rich flavor and nutritious nature from fruits, veggies, nuts and seeds.'
    this.products = [
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/swag-1-300x300.jpg",
        "name": "Swag",
        "code": "₹ 200",
        "symbol": "₹",
        "price": "200",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Banana, Almond milk, Guava, Chia seeds, Spirulina"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/thalaiva-300x300.jpg",
        "name": "Thalaiva",
        "code": "₹ 245",
        "symbol": "₹",
        "price": "245",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Banana, Milk, Whey Protein, Almonds"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/super-300x300.jpg",
        "name": "Super Nova",
        "code": "₹ 245",
        "symbol": "₹",
        "price": "245",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Banana, Milk, Whey Protein, Peanut Butter and Dark Chocolate"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/rogue-300x300.jpeg",
        "name": "Rogue",
        "code": "₹ 245",
        "symbol": "₹",
        "price": "245",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Banana, Milk, Whey Protein, Almonds, Sapota, Apple"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/newyorker-300x300.jpg",
        "name": "New Yorker",
        "code": "₹ 245",
        "symbol": "₹",
        "price": "245",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Banana, Milk, Whey Protein, Cocoa, Dark Chocolate, Almonds"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/barba-300x300.jpg",
        "name": "Barbarian",
        "code": "₹ 200",
        "symbol": "₹",
        "price": "200",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Sapota, Avocado, Paneer, Coffee, Dates, Cocoa, Milk"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/Dyna-300x300.jpg",
        "name": "Dynamight",
        "code": "₹ 245",
        "symbol": "₹",
        "price": "245",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Musk Melon, Papaya, Pistachios, Honey, Cardamom, Milk, Whey"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/nuts-300x300.jpg",
        "name": "Naked Nuts",
        "code": "₹ 200",
        "symbol": "₹",
        "price": "200",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Banana, whole milk, Almonds, Pistachios, Walnuts, Cashews, Raisins and Figs"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/big-jo-300x300.jpg",
        "name": "Big Jo",
        "code": "₹ 200",
        "symbol": "₹",
        "price": "200",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Banana, whole milk, Peanut butter, Dark Chocolate"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/first-300x300.jpg",
        "name": "First Knight",
        "code": "₹ 200",
        "symbol": "₹",
        "price": "200",
        "quantity": "300",
        "measuringUnit": "ml",
        "ingredient": "Banana, whole milk, Almonds, Sapota, Apple"
      }
    ]
    // this.products = this.products.splice(1, 1)
  }

  ngOnInit() {
  }

}
