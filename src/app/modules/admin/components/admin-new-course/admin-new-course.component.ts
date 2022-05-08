import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-new-course',
  templateUrl: './admin-new-course.component.html',
  styleUrls: ['./admin-new-course.component.scss']
})
export class AdminNewCourseComponent implements OnInit {

  newCourseForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.newCourseForm = fb.group({
      title: ['Java', [Validators.required,]],
      shortName: ['java', [Validators.required,]],
      description: ['lorme ipsum tea eateafa esTaea', [Validators.required,]],
      skillLevel: ['BEGINNER', [Validators.required,]],
      price: [19.99, [Validators.required,]],
      duration: [5, [Validators.required,]],
      courseImageURL: ['http://localhost:4200/courses', [Validators.required,]],
      courseVideoURL: ['http://localhost:4200/our-team', [Validators.required,]],
      author: ['Hisham Khartoum', [Validators.required,]],
      language: ['ENGLISH', [Validators.required,]],
    })
  }

  ngOnInit(): void {
  }

}
