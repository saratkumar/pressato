import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpService } from './http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app.interceptor';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        ProductListComponent,
        LoginComponent,
        NewUserComponent,
    ],
    providers: [ HttpService, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    } ],
    exports: [
        CommonModule,
        RouterModule,
        FooterComponent,
        HeaderComponent,
        FormsModule,
        LoginComponent,
        NewUserComponent,
        ProductListComponent,
        FormsModule,
        HttpClientModule
    ]
})

export class CommonModules { }