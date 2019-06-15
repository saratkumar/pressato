var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var SmoothiesComponent = /** @class */ (function () {
    function SmoothiesComponent() {
        this.title = 'Smoothies';
        this.description = 'Smoothies are champions in getting essential nutrients in a one quick meal that is filled with adequate calories and saturated with natural saccharinity. Unlike milkshakes and malts, smoothies derive their rich flavor and nutritious nature from fruits, veggies, nuts and seeds.';
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
        ];
        // this.products = this.products.splice(1, 1)
    }
    SmoothiesComponent.prototype.ngOnInit = function () {
    };
    SmoothiesComponent = __decorate([
        Component({
            selector: 'app-smoothies',
            templateUrl: './smoothies.component.html',
            styleUrls: ['./smoothies.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SmoothiesComponent);
    return SmoothiesComponent;
}());
export { SmoothiesComponent };
//# sourceMappingURL=smoothies.component.js.map