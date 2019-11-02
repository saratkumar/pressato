import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
// import { DashboardComponent }   from './dashboard/dashboard.component';
// import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
// import { HeroesComponent }      from './heroes/heroes.component';
// import { HeroSearchComponent }  from './hero-search/hero-search.component';
// import { HeroService }          from './hero.service';
// import { MessageService }       from './message.service';
// import { MessagesComponent }    from './messages/messages.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeComponent } from './home/home.component';
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
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CommonModules } from './common/common.module';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { AppService } from './app.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angular-6-social-login';
import { SocialLoginModule, AuthServiceConfig } from 'angular-6-social-login'; 
export function socialConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('454848338471742')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('485140945919-ds5kg374baag2l1rgirvnn1gabh0ajbq.apps.googleusercontent.com')
      }
    ]
  );
  return config;
}  

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    FormsModule,
    CommonModules,
    AppRoutingModule,
    NgtUniversalModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    // DashboardComponent,
    // HeroesComponent,
    // HeroDetailComponent,
    // MessagesComponent,
    // HeroSearchComponent,

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
    MyOrdersComponent,
    AdminDashboardComponent
  ],
  providers: [AppService, AuthService, {
    provide: AuthServiceConfig,
    useFactory: socialConfigs
  } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
