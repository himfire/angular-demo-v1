import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import {DecodedToken} from "../../model/decoded-token.model";
import jwt_decode from "jwt-decode";
import {User} from "../../model/user.model";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  lessons: any;
  loggedUser !: User;
  isAdmin: boolean = false;
  userRole?: string;
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    let token = localStorage.getItem("_jwt");
    let jwtDecode: DecodedToken = jwt_decode(<string> token);
    console.log(jwtDecode);
    this.userService.getUserById(jwtDecode.userId).subscribe((value) => {
      this.loggedUser = value;
      this.userRole = jwtDecode.role;
    },error => {
      console.log(error);
      this.router.navigate(["login"])
    })
    // load the token , decode ==> userId
    //

    this.pageBuilder()
  }
  logout() {
    localStorage.removeItem('_jwt');
    this.router.navigate([""])
  }
  pageBuilder(){
    $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }
    });

    $("#close-sidebar").click(function() {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function() {
      $(".page-wrapper").addClass("toggled");
    });
  }
}
