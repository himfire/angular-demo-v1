import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.card-name .card-input').html($('.card-list li:first-child').html());

    $('.card-grp').click(function() {
      $('.card-list').toggleClass('visible');
    });

    $('.card-list li').click(function() {
      $('.card-list').removeClass('visible');
      $('.card-input').html($(this).html());
    });
  }

}
