var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModules } from './common/common.module';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { ColdpressComponent } from './coldpress/coldpress.component';
import { ProbioticsComponent } from './probiotics/probiotics.component';
import { SaladsComponent } from './salads/salads.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { PackagesComponent } from './packages/packages.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PriceSummaryComponent } from './price-summary/price-summary.component';
import { HttpService } from './common/http.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NgtUniversalModule } from '@ng-toolkit/universal';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                CategoryComponent,
                ColdpressComponent,
                ProbioticsComponent,
                SaladsComponent,
                SmoothiesComponent,
                PackagesComponent,
                ProductDetailsComponent,
                CartComponent,
                CheckoutComponent,
                PriceSummaryComponent,
                ContactUsComponent,
                TermsAndConditionsComponent,
                PrivacyPolicyComponent,
                ReturnPolicyComponent,
                AboutUsComponent,
                FaqComponent,
                MyOrdersComponent
            ],
            imports: [
                BrowserModule.withServerTransition({ appId: 'serverApp' }),
                NoopAnimationsModule,
                CommonModules,
                RouterModule.forRoot(AppRoutes),
                NgtUniversalModule
            ],
            providers: [HttpService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map