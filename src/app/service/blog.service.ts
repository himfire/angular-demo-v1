import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../model/lesson.model";
import {Blog} from "../model/blog.model";
import {Constants} from "../shared/constatnts";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  BASE_URL = Constants.BASE_URL+"/blogs/"

  constructor(private http:HttpClient) {
  }

  getBlogByTitle(title: string){
    return this.http.get<Blog[]>(this.BASE_URL+"?title="+title);
  }

  getAllBlogs(){
    return this.http.get<Blog[]>(this.BASE_URL);
  }
}
