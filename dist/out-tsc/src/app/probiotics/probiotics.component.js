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
var ProbioticsComponent = /** @class */ (function () {
    function ProbioticsComponent() {
        this.title = 'Probiotics';
        this.description = 'Our probiotic drink is loaded with good, helpful bacteria from yogurt, and a well curated selection of fruits and veggies that are high in nutritive value and great in taste! The bacteria in yogurt is good for your gut as it has several digestive benefits and allergies. The fruits and veggies in our probiotic drink help promote digestive wellness and load your body with minerals to keep infections out of the way. Regularly consumed our probiotics help in regulating blood sugar levels and moods.';
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
        ];
    }
    ProbioticsComponent.prototype.ngOnInit = function () {
    };
    ProbioticsComponent = __decorate([
        Component({
            selector: 'app-probiotics',
            templateUrl: './probiotics.component.html',
            styleUrls: ['./probiotics.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ProbioticsComponent);
    return ProbioticsComponent;
}());
export { ProbioticsComponent };
//# sourceMappingURL=probiotics.component.js.map