import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Lesson} from "../../../../model/lesson.model";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  lessons:Lesson[] = []
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.getAllLessons();
  }
  getAllLessons(){

    let loadedLessons = [
      { "id": 1,"img":  "assets/images/lesson1.jpg", "name":"scrum-master", "topic": "Scrum", "price": 5000,"title": "Scrum Master" , "instructor": "test test", "numberOfStudents": 20, "numberOfComments": 10},
      { "id": 2,"img":  "assets/images/lesson2.jpg", "name":"sap-logistics-front-end", "topic": "SAP", "price": 5000,"title": "SAP: Logistics Front End" , "instructor": "test test", "numberOfStudents": 20, "numberOfComments": 5},
      { "id": 1,"img":  "assets/images/lesson3.jpg", "name":"agile-service-delivery-management", "topic": "Agile", "price": 2500,"title": "Agile Service Delivery Management" , "instructor": "test test", "numberOfStudents": 20, "numberOfComments": 6},
      { "id": 1,"img":  "assets/images/lesson4.jpg", "name":"introduction-to-kubernetes", "topic": "Kubernetes", "price": 5000,"title": "Introduction to Kubernetes" , "instructor": "test test", "numberOfStudents": 15, "numberOfComments": 7},
      { "id": 1,"img":  "assets/images/lesson5.jpg", "name":"digital-marketing+data-analytics", "topic": "Digital Marketing", "price": 3000,"title": "Digital Marketing +Data Analytics" , "instructor": "test test", "numberOfStudents": 30, "numberOfComments": 8},
      { "id": 1,"img":  "assets/images/lesson6.jpg", "name":"certified-product-owner", "topic": "Product Owner", "price": 3500,"title": "Certified Product Owner" , "instructor": "test test", "numberOfStudents": 50, "numberOfComments": 8}
    ];
    this.lessons = this.lessons.concat(loadedLessons)
  }

  courses_page(number: number) {


  }
}
