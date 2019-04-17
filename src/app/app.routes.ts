import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { PackagesComponent } from './packages/packages.component';
import { ProbioticsComponent } from './probiotics/probiotics.component';
import { SaladsComponent } from './salads/salads.component';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { ColdpressComponent } from './coldpress/coldpress.component';

export const AppRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
        { path: '', redirectTo: 'coldpress', pathMatch: 'prefix'},
        { path: 'coldpress', component: ColdpressComponent },
        { path: 'packages', component: PackagesComponent },
        { path: 'probiotic', component: ProbioticsComponent },
        { path: 'salads', component: SaladsComponent },
        { path: 'smoothies', component: SmoothiesComponent }
      ]
}
];
