import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModules } from './common/common.module';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
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

@NgModule({
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
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CommonModules,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
