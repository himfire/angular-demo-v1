import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Collection} from "../model/collection.model";

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  BASE_URL = 'http://localhost:3000/classification'
  constructor(private  http: HttpClient) { }

  getAllClassification(){
    return this.http.get<Collection[]>(this.BASE_URL);
  }
}
