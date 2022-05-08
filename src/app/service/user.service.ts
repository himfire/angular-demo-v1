import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user.model";
import {SearchUsers} from "../model/search.users.model";
import {Page} from "../model/page.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL='http://localhost:8080/api/v1/users'
  constructor(private http:HttpClient) {

  }


  getUserById(id:number){

    return this.http.get<User>(this.BASE_URL+"/"+id);
  }

  getAllUsers(search:any){
    console.log(search)

    let queries = new URLSearchParams(search).toString();
    console.log(queries)
     let q = "page=0&size=10&order=ASC&authority=USER";
    return this.http.get<Page<User>>(this.BASE_URL+"/search?"+queries);
  }
  deleteUserById(id:number){
    return this.http.delete(this.BASE_URL+"/"+id)
  }
  updateUserById(form:any,userId:number){
    return this.http.put<String>(this.BASE_URL+"/"+userId,form, );
  }
}
