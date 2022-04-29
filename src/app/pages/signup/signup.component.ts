import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {registerLocaleData} from "@angular/common";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm:FormGroup
  constructor(private fb:FormBuilder,private auth:AuthService) {
    this.signUpForm = fb.group({
      firstName: ['Hisham', [Validators.required]],
      lastName: ['Khartoum', [Validators.required]],
      username: ['hossam', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_-]{4,32}')]],
      email:['hishamkhartoum@gmail.com ',[Validators.required]],
      authority:['0',[Validators.required]],

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
  }
/*  private String firstName;

  private String lastName;

  private String email;

  private String username;

  private String password;

  private Phone phone;

  private Address address;*/
  formNotValid: boolean = false;
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
      },error => {
        console.log("Error in connecting to user");
        console.log(error)
      })

    }
  }

  get f(){
    return this.signUpForm.controls;
  }
}
