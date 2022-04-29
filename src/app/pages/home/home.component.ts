import { Component, OnInit } from '@angular/core';
import {ClassificationService} from "../../service/classification.service";
import {Collection} from "../../model/collection.model";
import {Lesson} from "../../model/lesson.model";
import {LessonsService} from "../../service/lessons.service";
import {trigger, state, style} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('h5',[
      state('default',style({'background-color':'red'})),
      state('right',style({'background-color':'green'}))
    ])
  ]
})

export class HomeComponent implements OnInit {
  collections: Collection[] = []
  lessons:Lesson[] = []
  constructor(private classification:ClassificationService,private lesson:LessonsService) {

  }
  state = "default";
  ngOnInit(): void {
    this.state = 'right';
    this.getAllClassif();
    this.getAllLessons();

    // this.classification.getAllClassification().subscribe(value => {
    //   console.log("Got data from server")
    //   console.log(value)
    //   this.collections = this.collections.concat(value)
    // }, error => {
    //   console.log("Error :", error)
    // });

    // this.lesson.getAllLessons().subscribe(value => {
    // console.log("Get Lessons from Server")
    // console.log(value)
    // this.lessons = this.lessons.concat(value)
    // })

  }

  getStarted() {

  }

  getAllClassif(){
      let loadedData =  [
        { "id": 1, "title": "Tutorials", "img": "assets/images/tutorial.svg" },
        { "id": 2, "title": "Webinars", "img": "assets/images/board.svg" },
        { "id": 3, "title": "Coaching", "img": "assets/images/teacher.svg" },
        { "id": 4, "title": "Knowledge", "img": "assets/images/books.svg" },
        { "id": 5, "title": "Creativity", "img": "assets/images/creative-learning.svg" },
        { "id": 6, "title": "Education", "img": "assets/images/education.svg" }
      ];
      this.collections = this.collections.concat(loadedData)

  }

  getAllLessons(){

      let loadedLessons = [
        { "id": 1,"img":  "assets/images/lesson1.jpg", "topic": "Scrum", "price": 5000,"title": "Scrum Master" , "instructor": "test test", "numberOfStudents": 20, "numberOfComments": 10},
        { "id": 2,"img":  "assets/images/lesson2.jpg", "topic": "SAP", "price": 5000,"title": "SAP: Logistics Front End" , "instructor": "test test", "numberOfStudents": 20, "numberOfComments": 5},
        { "id": 1,"img":  "assets/images/lesson3.jpg", "topic": "Agile", "price": 2500,"title": "Agile Service Delivery Management" , "instructor": "test test", "numberOfStudents": 20, "numberOfComments": 6},
        { "id": 1,"img":  "assets/images/lesson4.jpg", "topic": "Kubernetes", "price": 5000,"title": "Introduction to Kubernetes" , "instructor": "test test", "numberOfStudents": 15, "numberOfComments": 7},
        { "id": 1,"img":  "assets/images/lesson5.jpg", "topic": "Digital Marketing", "price": 3000,"title": "Digital Marketing +Data Analytics" , "instructor": "test test", "numberOfStudents": 30, "numberOfComments": 8},
        { "id": 1,"img":  "assets/images/lesson6.jpg", "topic": "Product Owner", "price": 3500,"title": "Certified Product Owner" , "instructor": "test test", "numberOfStudents": 50, "numberOfComments": 8}
      ];
      this.lessons = this.lessons.concat(loadedLessons)

  }
}
