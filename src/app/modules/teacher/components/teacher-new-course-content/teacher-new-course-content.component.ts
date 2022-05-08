import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../../../service/course.service";
import {Router} from "@angular/router";
import {Course} from "../../../../model/course.model";
import jwt_decode from "jwt-decode";
import {DecodedToken} from "../../../../model/decoded-token.model";

@Component({
  selector: 'app-teacher-new-course-content',
  templateUrl: './teacher-new-course-content.component.html',
  styleUrls: ['./teacher-new-course-content.component.scss']
})
export class TeacherNewCourseContentComponent implements OnInit {

  newCourseForm:FormGroup;
  savedCourse !:Course;
  constructor(private fb: FormBuilder,private service:CourseService,private router:Router) {
    this.newCourseForm = fb.group({
      title: ['Introduction to Java', [Validators.required,]],
      slugTitle: ['introduction-to-java-part2', [Validators.required,]],
      description: ['lorme ipsum tea eateafa esTaea', [Validators.required,]],
      skillLevel: ['BEGINNER', [Validators.required,]],
      price: [19.99, [Validators.required,]],
      duration: [5, [Validators.required,]],
      courseImageURL: ['../../../../../assets/images/header-image2.png' ],
      courseVideoURL: ['../../../../../assets/images/header-image2.png'],
      author: [undefined, [Validators.required,]],
      language: ['ENGLISH', [Validators.required,]],
      contributes: ['Harry', [Validators.required,]],
    })
  }

  ngOnInit(): void {
    let token = localStorage.getItem('_jwt');
    let decodedToken = <DecodedToken> jwt_decode(<string> token);
    if ( decodedToken ){
      this.newCourseForm.patchValue({
        author: decodedToken.userId
      })
    }
  }

  submit() {
    console.log(this.newCourseForm)
    console.log(this.newCourseForm.value)
    if ( this.newCourseForm.valid){

      this.service.createCourse(this.newCourseForm.value).subscribe((value) => {
        console.log("Course registered")
        console.log(value)
        this.savedCourse = value;

      }, (error) => {
        console.log(error)
      });
    }
  }
}
