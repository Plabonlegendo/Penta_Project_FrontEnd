import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { RequestResponse } from '../models/app-dto';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((error: any) => {
            if([401, 403].includes(error.status)){
                const requestResponse: RequestResponse = {
                    status: '',
                    message: '',
                    data: null
                };
            }
            console.log(error.status);
            return throwError(error);
        }))
    }
}