import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import jwt_decode from "jwt-decode";
import {DecodedToken} from "../../model/decoded-token.model";
import {localizedString} from "@angular/compiler/src/output/output_ast";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loadSpinner: boolean = false;
  failed: boolean = false;

  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService) {
    this.loginForm = this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // loginUser
    this.failed = false;
    this.loadSpinner = true;
    this.auth.login(this.loginForm.value).subscribe(res => {{
      console.log(res)
      console.log('Login success');
      let token = <string> res.body?.token;
      // save token to local storage: # keep me logged in
      localStorage.setItem('_jwt', token);
      let jwtDecode: DecodedToken = jwt_decode(<string> token);
      console.log(jwtDecode.role)
      this.loadSpinner = false;
      switch (jwtDecode.role){
        case "ROLE_ADMIN":
          this.router.navigateByUrl("/admin-dashboard")
          break
        case "ROLE_TEACHER":
          this.router.navigateByUrl("/teacher-dashboard")
          break
        default:
          this.router.navigateByUrl("/user-dashboard")
      }
    }},error => {
      console.log(error);
      this.loadSpinner = false;
      this.failed = true;
    })

  }
}
