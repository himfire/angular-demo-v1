import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JWToken} from "../model/token.model";
import {Constants} from "../shared/constatnts";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL =  Constants.BASE_URL;
  constructor(private http:HttpClient) {
  }

  register(form:any){
    return this.http.post<String>(this.BASE_URL+"/api/v1/auth/signup",form, );
  }

  login(form:any){
    return this.http.post<JWToken>(this.BASE_URL+"/api/v1/auth/login",form, {observe: 'response'});
  }
}
