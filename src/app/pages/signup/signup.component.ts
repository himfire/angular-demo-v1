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
      firstName: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9_-]{4,32}')]],
      email:['',[Validators.required, Validators.email]],
      authority:['',[Validators.required]],

      password:['',[Validators.required]],
      password2:['',[Validators.required]],
      phone : fb.group({
        countryCode: ['+',[Validators.required]],
        phoneNumber: ['', [Validators.required]]
      }),
      address: fb.group({
        address: ['',[Validators.required]],
        city: ['',[Validators.required]],
        country: ['',[Validators.required]],
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
