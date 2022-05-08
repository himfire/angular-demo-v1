import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {JWToken} from "../../model/token.model";
import jwt_decode from "jwt-decode";
import {DecodedToken} from "../../model/decoded-token.model";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private router: Router) {}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('_jwt');
    console.log("Inside user login")
    if (token == null ){
      this.router.navigateByUrl('/login')
      return false;
    }else{
      let decodedToken: DecodedToken = jwt_decode(<string>token);
      if (decodedToken.role !== "USER"){
        this.router.navigateByUrl('/login')
        return false;
      }
    }
    return true;
  }

}
