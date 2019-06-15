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
var SaladsComponent = /** @class */ (function () {
    function SaladsComponent() {
        this.title = 'Salads';
        this.description = 'Our salads apart from their natural good taste and great texture alongside wonderful colours and aromas, eating a large serving of fresh, raw vegetables each day can have significant health benefits. Leafy greens and raw veggies are a superb source of natural fiber and consuming enough fiber each day can aid in weight loss and healthy weight maintenance. Loaded with vitamins and minerals, eating a salad a day increase the level of powerful antioxidants in your blood.';
        this.products = [
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
        ];
    }
    SaladsComponent.prototype.ngOnInit = function () {
    };
    SaladsComponent = __decorate([
        Component({
            selector: 'app-salads',
            templateUrl: './salads.component.html',
            styleUrls: ['./salads.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SaladsComponent);
    return SaladsComponent;
}());
export { SaladsComponent };
//# sourceMappingURL=salads.component.js.map