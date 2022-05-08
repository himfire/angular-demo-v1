import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JWToken} from "../model/token.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:8080/api/v1/auth'
  constructor(private http:HttpClient) {

  }
  register(form:any){
    return this.http.post<String>(this.BASE_URL+"/signup",form, );
  }

  login(form:any){
    return this.http.post<JWToken>(this.BASE_URL+"/login",form, {observe: 'response'});
  }
}
