import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {DecodedToken} from "../../model/decoded-token.model";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router) {}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('_jwt');
    if (token != null ){
      let decodedToken: DecodedToken = jwt_decode(<string>token);
      if ( decodedToken.role === "ROLE_ADMIN"){
        this.router.navigateByUrl('/admin-dashboard')
        return false;
      }
      if (decodedToken.role === "ROLE_USER"){
        this.router.navigateByUrl('/user-dashboard')
        return false;
      }
      return false;
    }
    return true;
  }

}
