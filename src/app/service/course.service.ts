import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Course} from "../model/course.model";
import {Page} from "../model/page.model";
import {User} from "../model/user.model";
import {Constants} from "../shared/constatnts";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  BASE_URL= `${Constants.BASE_URL}/api/v1/courses`
  constructor(private http:HttpClient) {

  }
  search(){

    let filterOptions: any = {
      page: 0,size: 20, order: 'ASC'
    }
    let queries = new URLSearchParams(filterOptions).toString();
    // console.log(queries)
    // console.log("search courses...")
    return this.http.get<Page<Course>>(this.BASE_URL+"/search?"+queries);
  }

  createCourse(form:Course){
    return this.http.post<Course>(this.BASE_URL,form)
  }

  deleteCourse(id:number){
    return this.http.delete(`${this.BASE_URL}/${id}`)
  }

  getCourseByTitle(title:string){
    return this.http.get<Course>(`${this.BASE_URL}/${title}`)
  }

  getCourseById(id:number){
    return this.http.get<Course>(`${this.BASE_URL}/${id}`)
  }
  searchCourse(){

  }
}
