import { Component, OnInit } from '@angular/core';
import {User} from "../../../../model/user.model";
import {UserService} from "../../../../service/user.service";
import {SearchUsers} from "../../../../model/search.users.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
 users ?: User[];
 userToEdit ?: User;
  editUserForm: FormGroup;


  constructor(private userService:UserService,private fb:FormBuilder) {
    this.editUserForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      phone:fb.group({
        countryCode:['',[Validators.required]],
        phoneNumber:['',[Validators.required]],
      }),
      address:fb.group({
        country:['',[Validators.required]],
        state:['',[Validators.required]],
        city:['',[Validators.required]],
        address:['',[Validators.required]],
      })
    });
  }

  ngOnInit(): void {
    console.log("Admin dashboard init...")
    this.getAllUsers()

  }

  getAllUsers(){
    let filterOptions:any = {
      page: 0,
      size : 10,
      order: 'ASC',
      authority: 'ADMIN'
    }
    this.userService.getAllUsers(filterOptions).subscribe((value) => {
      this.users = value.content ;
      console.log(value)
    })
  }

  editUser(user:User) {
    console.log(user)
    this.userToEdit = user;
    this.editUserForm.patchValue({
      firstName: this.userToEdit?.firstName.toString(),
      lastName: this.userToEdit?.lastName,
      phone:{
        countryCode:this.userToEdit?.phone?.countryCode,
        phoneNumber:this.userToEdit?.phone?.phoneNumber,
      },
      address: {
        country: this.userToEdit?.address?.country,
        state: this.userToEdit?.address?.state,
        city: this.userToEdit?.address?.city,
        address: this.userToEdit?.address?.address,
      }
    });
  }

  submit() {

  }
}
