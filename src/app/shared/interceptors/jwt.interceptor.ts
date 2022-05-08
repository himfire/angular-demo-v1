import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  // This method intercepts http requests to auto-inject jwt into request header
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('_jwt');
    console.log('token from jwt interceptor: ')
    console.log(token)
    if( token != null ){
      req = req.clone({
        setHeaders:{
          Authorization : `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
