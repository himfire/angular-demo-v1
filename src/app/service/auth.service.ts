import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JWToken} from "../model/token.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:8080/api/v1/'
  constructor(private http:HttpClient) {

  }
  register(form:any){
    return this.http.post(this.BASE_URL+"users",form, );
  }

  login(form:any){
    return this.http.post<JWToken>(this.BASE_URL+"auth/login",form, {observe: 'response'});
  }
}
