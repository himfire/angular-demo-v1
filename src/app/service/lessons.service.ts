import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../model/lesson.model";

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  BASE_URL = 'http://localhost:3000/lessons'
  constructor(private http:HttpClient) { }
  getAllLessons(){
    return this.http.get<Lesson[]>(this.BASE_URL);
  }
}
