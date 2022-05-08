import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-dashboard-container',
  templateUrl: './admin-dashboard-container.component.html',
  styleUrls: ['./admin-dashboard-container.component.scss']
})
export class AdminDashboardContainerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout() {
    // remove the jwt from local storage
    localStorage.removeItem('_jwt')
    this.router.navigateByUrl("/login")
  }
}
