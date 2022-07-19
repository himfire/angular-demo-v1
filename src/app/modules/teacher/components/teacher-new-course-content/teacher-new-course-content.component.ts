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
      title: ['', [Validators.required,]],
      slugTitle: ['', [Validators.required,]],
      description: ['', [Validators.required,]],
      skillLevel: ['', [Validators.required,]],
      price: [19.99, [Validators.required,]],
      duration: [5, [Validators.required,]],
      courseImageURL: ['' ],
      courseVideoURL: [''],
      author: [, [Validators.required,]],
      language: ['', [Validators.required,]],
      contributes: ['', [Validators.required,]],
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
    this.newCourseForm.value.slugTitle = this.slugify(this.newCourseForm.value.title)
    console.log(this.newCourseForm)
    console.log(this.newCourseForm.value)
    if ( this.newCourseForm.valid){
      this.service.createCourse(this.newCourseForm.value).subscribe((value) => {
        console.log("Course registered")
        console.log(value)
        this.savedCourse = value;
        this.router.navigateByUrl("/");
      }, (error) => {
        console.log(error)
      });
    }
  }

  counter(i: number) {
    return new Array(i);
  }

  private slugify(title:string) {
    return title
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
}
