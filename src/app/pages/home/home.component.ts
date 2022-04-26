import { Component, OnInit } from '@angular/core';
import {ClassificationService} from "../../service/classification.service";
import {Collection} from "../../model/collection.model";
import {Lesson} from "../../model/lesson.model";
import {LessonsService} from "../../service/lessons.service";
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';
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
    this.classification.getAllClassification().subscribe(value => {
      console.log("Got data from server")
      console.log(value)
      this.collections = this.collections.concat(value)
    }, error => {
      console.log("Error :", error)
    }), this.lesson.getAllLessons().subscribe(value => {
      console.log("Get Lessons from Server")
      console.log(value)
      this.lessons = this.lessons.concat(value)
    })
  }

  getStarted() {

  }
}
