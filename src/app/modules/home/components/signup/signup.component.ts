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
      firstName: ['',
        [Validators.required],
        /*Validators.compose(
          [
            Validators.minLength(3),
            Validators.maxLength(50),
            Validators.pattern('^[a-zA-Z]+$')
          ]
        )*/
      ],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],

      password:['',[Validators.required]],
      password2:['',[Validators.required]],
      accept_terms:[false,[Validators.required]],

    });
  }

  ngOnInit(): void {
    // load the role
    /*this.route.paramMap
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

    });*/
  }

  formNotValid: boolean = false;
  success: boolean = false;
  failed: boolean =false;
  errors : string[] = [];
  loadSpinner: boolean = false;
  onSubmit() {
    this.failed = false;
    console.log(this.signUpForm.valid);
    console.log(this.signUpForm.value)
    if ( ! this.signUpForm.valid){
      this.formNotValid = true;
    }
    if ( this.signUpForm.valid){
/*      let form = {
        username: this.signUpForm.get('username'),
      }*/
      console.log("Inside signup form");
      this.loadSpinner = true;
      /*this.auth.register(this.signUpForm.value).subscribe(value => {
        console.log("User Created");
        this.success = true;
        this.loadSpinner = false;

        // this.router.navigate(["login"])
      },error => {
        console.log("Error in registering to user");
        console.log(error)
        this.errors = error;
        this.loadSpinner = false;
        this.failed = true;
      })*/

    }
  }

  get f(){
    return this.signUpForm.controls;
  }

  returnToLoginPage() {
    this.router.navigateByUrl("/login")
  }
}
