import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {DecodedToken} from "../../model/decoded-token.model";
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor(private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('_jwt');

    if (token == null ){
      this.router.navigateByUrl('/login')
      return false;
    }else{
      let decodedToken: DecodedToken = jwt_decode(<string>token);
      if (decodedToken.role !== "ADMIN"){
        this.router.navigateByUrl('/login')
        return false;
      }
    }
    return true;
  }

}
