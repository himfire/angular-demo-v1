import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../model/lesson.model";
import {Constants} from "../shared/constatnts";

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  BASE_URL= `${Constants.BASE_URL}/api/v1/lessons`

  constructor(private http:HttpClient) { }
  getAllLessons(){
    return this.http.get<Lesson[]>(this.BASE_URL);
  }
}
