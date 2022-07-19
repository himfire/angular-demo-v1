import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../shared/constatnts";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  BASE_URL = `${Constants.BASE_URL}/api/v1/contact`
  constructor(private http:HttpClient) {
  }
  getAllContact(){

  }
  getContact(){

  }
}
