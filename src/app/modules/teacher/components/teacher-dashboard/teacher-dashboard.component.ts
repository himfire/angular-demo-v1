import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../../../model/lesson.model";
import {FormBuilder} from "@angular/forms";
import {LessonsService} from "../../../../service/lessons.service";
import {Course} from "../../../../model/course.model";
import {Page} from "../../../../model/page.model";
import {CourseService} from "../../../../service/course.service";

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  courses !: Page<Course>;

  constructor(private fb:FormBuilder,private course:CourseService) { }

  ngOnInit(): void {
    this.course.search().subscribe((value) => {
      // console.log(value)
      this.courses = value;
    })
  }

}
