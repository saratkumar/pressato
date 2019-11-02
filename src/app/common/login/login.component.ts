import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from '../../app.service';
import { SharedService } from '../shared.service';
import { Socialusers } from '../Models/sociallogin';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular-6-social-login';
import { SocialLoginService } from '../social-login.service';
import { Router } from '@angular/router';
import { debug } from 'util';
declare var jQuery:any; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  params: Object = {};
  showError: boolean = false;
  @Output() signUp = new EventEmitter();

  response;
  socialusers = new Socialusers();
  
  constructor(
    private appService: AppService,
    private sharedService: SharedService,
    public OAuth: AuthService,
    private SocialloginService: SocialLoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignUp() {
    this.signUp.emit();
  }
  

  onLoginIn() {
    this.appService.postLoginUser(this.params, (success) => {
      localStorage.setItem('token', JSON.stringify(success.data.authToken));
      this.sharedService.authBehaviourSubj.next(true);
      jQuery("#myModal").modal("hide");
      setTimeout(() => {
        let cartItem = this.sharedService.getCartItem();
        if (cartItem) {
          this.sharedService.addItemToCart(cartItem);
        }
      }, 100);
    }, (error)=> {
      this.showError = true;
    });
  }

  guestUser() {
    this.appService.postLoginAsGuestUser('', (success) => {
      localStorage.setItem('token', JSON.stringify(success.data.authToken));
      this.sharedService.authBehaviourSubj.next(true);
      jQuery("#myModal").modal("hide");
      setTimeout(() => {
        let cartItem = this.sharedService.getCartItem();
        if (cartItem) {
          this.sharedService.addItemToCart(cartItem);
        }
      }, 100);
      
    }, (error) => {
      // this.showError = true;
    });
  }

  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      this.Savesresponse(socialusers);
    });

    
  } 

  Savesresponse(socialusers: Socialusers) {
    this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {
      localStorage.setItem('token', JSON.stringify(res.data.authToken));
      this.sharedService.authBehaviourSubj.next(true);
      jQuery("#myModal").modal("hide");
      setTimeout(() => {
        let cartItem = this.sharedService.getCartItem();
        if (cartItem) {
          this.sharedService.addItemToCart(cartItem);
        }
      }, 100);
    })
  } 

  

}
