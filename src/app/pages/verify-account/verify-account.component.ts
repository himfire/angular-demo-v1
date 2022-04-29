import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {

  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      let id = params['id'];
      let code = params['code'];
       this.http.post("http://localhost/api/v1/auth/verify/"+ id + "/"+code, null, {observe: 'response'}).subscribe(value => {
         console.log(value)
       }, error => {
         console.log(error)
       });

    })
  }

}
