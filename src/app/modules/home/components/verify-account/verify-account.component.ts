import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit {
  accountVerified: boolean = false;
  verifFailed: boolean = false;
  constructor(private http:HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      let id = params['id'];
      let code = params['code'];
      console.log('id :')
      console.log(id)
      console.log('code :')
      console.log(code)
       this.http.post("http://localhost:8080/api/v1/auth/verify/"+ id + "?code="+code, null, {observe: 'response'}).subscribe(value => {
         console.log(value)
         this.accountVerified = true;
       }, error => {
          this.verifFailed = true;
         console.log(error)
       });

    })
  }

}
