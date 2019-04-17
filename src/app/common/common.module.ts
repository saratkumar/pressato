import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        NewUserComponent
    ],
    providers: [],
    exports: [
        CommonModule,
        RouterModule,
        FooterComponent,
        HeaderComponent,
        FormsModule,
        LoginComponent,
        NewUserComponent
    ]
})

export class CommonModules { }