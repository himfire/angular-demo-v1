import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Collection} from "../model/collection.model";
import {Constants} from "../shared/constatnts";

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  BASE_URL = Constants.BASE_URL+'/classification'
  constructor(private  http: HttpClient) { }

  getAllClassification(){
    return this.http.get<Collection[]>(this.BASE_URL);
  }
}
