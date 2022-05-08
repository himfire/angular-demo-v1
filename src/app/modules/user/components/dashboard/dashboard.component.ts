import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LessonsService} from "../../../../service/lessons.service";
import {Lesson} from "../../../../model/lesson.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lessons: Lesson[] = [];

  constructor(private fb:FormBuilder,private lesson:LessonsService) { }

  ngOnInit(): void {
    this.lesson.getAllLessons().subscribe(value => {
      console.log(value)
      this.lessons = this.lessons.concat(value);
    })
  }

}
