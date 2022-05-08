import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../../service/course.service";
import {Course} from "../../../../model/course.model";

@Component({
  selector: 'app-teacher-course-details',
  templateUrl: './teacher-course-details.component.html',
  styleUrls: ['./teacher-course-details.component.scss']
})
export class TeacherCourseDetailsComponent implements OnInit {

  currentCourse !: Course;

  constructor(private route: ActivatedRoute, private course: CourseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(value => {
      console.log(value['slugTitle'])
      if (value['slugTitle'] ){
        this.course.getCourseByTitle(value['slugTitle']).subscribe((course) => {
          console.log(course);
          this.currentCourse = course;
        },error => {
          console.log(error)
        })
      }
    })
  }

}
