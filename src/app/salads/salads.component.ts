import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salads',
  templateUrl: './salads.component.html',
  styleUrls: ['./salads.component.css']
})
export class SaladsComponent implements OnInit {

  title: string;
  description: string;
  products: {}[];
  constructor() {
    this.title = 'Salads'
    this.description = 'Our salads apart from their natural good taste and great texture alongside wonderful colours and aromas, eating a large serving of fresh, raw vegetables each day can have significant health benefits. Leafy greens and raw veggies are a superb source of natural fiber and consuming enough fiber each day can aid in weight loss and healthy weight maintenance. Loaded with vitamins and minerals, eating a salad a day increase the level of powerful antioxidants in your blood.'
    this.products =[
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/medi-300x300.jpg",
        "name": "Mediterranean Medley (Paneer)",
        "code": "₹ 190",
        "symbol": "₹",
        "price": "190",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Purple Cabbage, Chinese Cabbage, Feta Cheese, Baby Corn, Zucchini, Carrot, Leek, Lettuce, Roasted Peanuts, Cashew Nuts"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/medi-300x300.jpg",
        "name": "Mediterranean Medley (Chicken)",
        "code": "₹ 210",
        "symbol": "₹",
        "price": "210",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Purple Cabbage, Chinese Cabbage, Feta Cheese, Baby Corn, Zucchini, Carrot, Leek, Lettuce, Roasted Peanuts, Cashew Nuts"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/medi-300x300.jpg",
        "name": "Mediterranean Medley (Eggs)",
        "code": "₹ 200",
        "symbol": "₹",
        "price": "200",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Purple Cabbage, Chinese Cabbage, Feta Cheese, Baby Corn, Zucchini, Carrot, Leek, Lettuce, Roasted Peanuts, Cashew Nuts"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg",
        "name": "Wild Rice Party (Chicken)",
        "code": "₹ 210",
        "symbol": "₹",
        "price": "210",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/Salad_1-300x300.jpg",
        "name": "Farm Frenzy (Chicken)",
        "code": "₹ 210",
        "symbol": "₹",
        "price": "210",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Black Rice, Paneer, Carrots, Bell Peppers, Onion, Cauliflower, Cashew Nuts, Biriyani Masala, Ghee, Himalayan Salt"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/Salad_1-1-300x300.jpg",
        "name": "Farm Frenzy (Eggs)",
        "code": "₹ 200",
        "symbol": "₹",
        "price": "200",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Black Rice, Paneer, Carrots, Bell Peppers, Onion, Cauliflower, Cashew Nuts, Biriyani Masala, Ghee, Himalayan Salt"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg",
        "name": "Wild Rice Party (Eggs)",
        "code": "₹ 200",
        "symbol": "₹",
        "price": "200",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/wild-300x300.jpg",
        "name": "Wild Rice Party (Paneer)",
        "code": "₹ 190",
        "symbol": "₹",
        "price": "190",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Black Rice, Colored Capsicum, Lettuce, Chinese Cabbage, Purple Cabbage, Leeks, Feta Cheese"
      },
      {
        "logo": "https://www.pressato.in/wp-content/uploads/2019/01/Salad_1-1-300x300.jpg",
        "name": "Farm Frenzy (Paneer)",
        "code": "₹ 190",
        "symbol": "₹",
        "price": "190",
        "quantity": "300gms",
        "measuringUnit": "ml",
        "ingredient": "Black Rice, Paneer, Carrots, Bell Peppers, Onion, Cauliflower, Cashew Nuts, Biriyani Masala, Ghee, Himalayan Salt"
      }
    ]
  }

  ngOnInit() {
  }

}
