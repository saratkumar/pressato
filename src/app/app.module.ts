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
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CommonModules,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
