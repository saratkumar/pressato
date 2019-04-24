import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { CategoryComponent } from './category/category.component';
// import { PackagesComponent } from './packages/packages.component';
// import { ProbioticsComponent } from './probiotics/probiotics.component';
// import { SaladsComponent } from './salads/salads.component';
// import { SmoothiesComponent } from './smoothies/smoothies.component';
// import { ColdpressComponent } from './coldpress/coldpress.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';

export const AppRoutes: Routes = [
  
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'category',
    children: [
      { path: ':category', component: CategoryComponent },      
      { path: ':category/:product', component: ProductDetailsComponent }
    ] 
    
  },
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'terms-conditions', component: TermsAndConditionsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'return-policy', component: ReturnPolicyComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'faq', component: FaqComponent}
  
//   {
//     path: '',
//     component: CategoryComponent,
//     children: [
//         { path: '', redirectTo: 'coldpress', pathMatch: 'prefix'},
//         { path: 'coldpress', component: ColdpressComponent },
//         { path: 'packages', component: PackagesComponent },
//         { path: 'probiotic', component: ProbioticsComponent },
//         { path: 'salads', component: SaladsComponent },
//         { path: 'smoothies', component: SmoothiesComponent },
//         { path: ':category/:product', component: ProductListComponent }
//       ]
// }
];
