import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../../../model/user.model";
import {Router} from "@angular/router";
import {UserService} from "../../../../service/user.service";
import {DecodedToken} from "../../../../model/decoded-token.model";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  model: any;
  form = new FormGroup({});
  loggedUser !: User;
  isAdmin: boolean = false;
  MyPhoto: any;
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    // load current logged user
    let token = localStorage.getItem("_jwt");
    let jwtDecode: DecodedToken = jwt_decode(<string> token);
    console.log(jwtDecode);
    this.userService.getUserById(jwtDecode.userId).subscribe((value) => {
      this.loggedUser = value;
      this.model = {
        firstName: value.firstName,
        lastName: value.lastName,
        phone:[{
          countryCode:value.phone.countryCode,
          phoneNumber:value.phone.phoneNumber,
        }],

          country:value.address.country,
          state:value.address.state,
          city:value.address.city,
          address:value.address.address

      };
    },error => {
      console.log(error);
      this.router.navigate(["login"])
    })
    // load the token , decode ==> userId
    //
  }


  onSubmit(model: User) {
    console.log(model);
  }

  submitPhoto() {

  }
}
