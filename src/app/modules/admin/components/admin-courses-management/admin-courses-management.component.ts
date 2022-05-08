import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-courses-management',
  templateUrl: './admin-courses-management.component.html',
  styleUrls: ['./admin-courses-management.component.scss']
})
export class AdminCoursesManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.courses-list .toggle-button').on("click",function() {
      $('.courses-list .menu-list').toggleClass('visible');
    });

    $('.card-name .card-input').html($('.card-list li:first-child').html());

    $('.card-name .card-grp').on("click",function() {
      $('.card-name .card-list').toggleClass('visible');
    });

    $('.card-name').on("mouseleave",function() {
      $('.card-name .card-list').removeClass('visible');
      $('.card-name .card-input').html($(this).html());
    });
  }

}
