import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }

    errorCase(event) {
        switch (event.status) {
            case 401:
                window.location.href = window.location.origin;
                break;
            // case 403:
            //     this.router.navigateByUrl('/forbidden');
            //     break;
            // case 503:
            //     this.router.navigateByUrl('/serviceUnavailable');
            //     break;
            
        }
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let headersObj = {};
        let optimusToken = localStorage.getItem('token');
        if(optimusToken) {
            headersObj['x-pressato-auth'] = 'Bearer ' + JSON.parse(optimusToken);
        }   
        request = request.clone({ 
            setHeaders: headersObj
        });
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                const temp = event.body && event.body.data ? event.body.data.token : undefined;
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                this.errorCase(err);
            }
        }));
    }
}
