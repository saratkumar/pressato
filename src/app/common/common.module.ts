import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ProductListComponent
    ],
    providers: [],
    exports: [
        CommonModule,
        RouterModule,
        FooterComponent,
        HeaderComponent,
        ProductListComponent,
        FormsModule
    ]
})

export class CommonModules { }