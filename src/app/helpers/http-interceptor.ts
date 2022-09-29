import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseData } from './base-data';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private jwtHelper: JwtHelperService, private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = window.localStorage.getItem('tokenKey'); // you probably want to store it in localStorage or something

    let token: any = localStorage.getItem(BaseData.LocalStorageKey.Auth);
    if(this.jwtHelper.isTokenExpired(token)){
        localStorage.removeItem(BaseData.LocalStorageKey.Auth);
        localStorage.removeItem(BaseData.LocalStorageKey.User);
        token = undefined;
        this.router.navigate(['/login']);
        return null;
    }
    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
        headers: req.headers.set('Authorization', `${token}`),
    });

    return next.handle(req1);
  }

}