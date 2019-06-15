var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { SharedService } from './shared.service';
import { NotifierModule } from 'angular-notifier';
import { AppService } from '../app.service';
var customNotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'top',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
var CommonModules = /** @class */ (function () {
    function CommonModules() {
    }
    CommonModules = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                FormsModule,
                HttpClientModule,
                NotifierModule.withConfig(customNotifierOptions)
            ],
            declarations: [
                HeaderComponent,
                FooterComponent,
                ProductListComponent,
                LoginComponent,
                NewUserComponent,
            ],
            providers: [HttpService, SharedService, {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptor,
                    multi: true,
                },
                AppService
            ],
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
                HttpClientModule,
                NotifierModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], CommonModules);
    return CommonModules;
}());
export { CommonModules };
//# sourceMappingURL=common.module.js.map