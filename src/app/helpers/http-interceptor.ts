import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseData } from './base-data';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private jwtHelper: JwtHelperService, private router: Router){}

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return next.handle(tokenizedReq)
  }

}