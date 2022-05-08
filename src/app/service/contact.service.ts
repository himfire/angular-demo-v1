import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  BASE_URL = "http://localhost:8080/api/v1/contact";
  constructor(private http:HttpClient) {
  }
  getAllContact(){

  }
  getContact(){

  }
}
