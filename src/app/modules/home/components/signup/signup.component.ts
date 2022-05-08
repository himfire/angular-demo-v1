import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import {AuthService} from "../../../../service/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userRole:String = ""
  signUpForm:FormGroup
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router,private route:ActivatedRoute) {
    this.signUpForm = fb.group({
      firstName: ['Hisham', [Validators.required]],
      lastName: ['Khartoum', [Validators.required]],
      username: ['hossam', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_-]{3,32}')]],
      email:['hishamkhartoum@gmail.com ',[Validators.required]],
      authority:[undefined,[Validators.required]],

      password:['123456',[Validators.required]],
      password2:['123456',[Validators.required]],
      phone : fb.group({
        countryCode: ['1',[Validators.required]],
        phoneNumber: ['9653752342', [Validators.required]]
      }),
      address: fb.group({
        address: ['test test',[Validators.required]],
        city: ['test',[Validators.required]],
        state: ['testt',[Validators.required]],
        country: ['USA',[Validators.required]],
      }),
      accept_terms:true,

    });
  }

  ngOnInit(): void {
    // load the role
    this.route.paramMap
      .pipe(map(() => window.history.state)).subscribe(value => {
        if ( value.role == undefined ) {
          console.log('redirect to welcome...')
          this.router.navigate(["/"])
        }else {
          console.log(">>> role: ", value.role)
          this.userRole = value.role;
          this.signUpForm.patchValue({
            authority: value.role
          })
        }

    });
  }

  formNotValid: boolean = false;
  success: boolean = false;
  failed: boolean =false;
  errors : string[] = [];
  onSubmit() {
    console.log(this.signUpForm);
    if ( ! this.signUpForm.valid){
      this.formNotValid = true;
    }
    if ( this.signUpForm.valid){
/*      let form = {
        username: this.signUpForm.get('username'),
      }*/
      this.auth.register(this.signUpForm.value).subscribe(value => {
        console.log("User Created");
        this.success = true;
        // this.router.navigate(["login"])
      },error => {
        console.log("Error in registering to user");
        console.log(error)
        this.errors = error;
      })

    }
  }

  get f(){
    return this.signUpForm.controls;
  }
}
