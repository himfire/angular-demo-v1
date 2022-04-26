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
      firstName: ['hisham', [Validators.required]],
      lastName: ['Khartoum', [Validators.required]],
      username: ['hdalang', [Validators.required]],
      email:['hdalang@gmail.com',[Validators.required]],
      authority:['USER',[Validators.required]],

      password:['1234qwer',[Validators.required]],
      password2:['1234qwer',[Validators.required]],
      phone : fb.group({
        countryCode: ['+999',[Validators.required]],
        phoneNumber: ['99999999999', [Validators.required]]
      }),
      address: fb.group({
        address: ['address...',[Validators.required]],
        city: ['city...',[Validators.required]],
        country: ['USA',[Validators.required]],
      }),
      accept_terms:true
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
  onSubmit() {
    console.log(this.signUpForm);
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
}
