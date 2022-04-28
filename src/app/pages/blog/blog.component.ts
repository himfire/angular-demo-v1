import { Component, OnInit } from '@angular/core';
import {Blog} from "../../model/blog.mode";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../service/blog.service";
import {Collection} from "../../model/collection.model";
import {Lesson} from "../../model/lesson.model";
import {ClassificationService} from "../../service/classification.service";
import {LessonsService} from "../../service/lessons.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  collections: Collection[] = []
  lessons:Lesson[] = []

  currentBlog ?: Blog;
  isContentLoaded: boolean = false;
  constructor(private route: ActivatedRoute, private blogService:BlogService,private classification:ClassificationService,private lesson:LessonsService) { }

  ngOnInit(): void {
    // grab route: titl
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
    this.route.params.subscribe(params => {
      console.log('route param: ');
      console.log(params);
      let blogTitle = params['title'];
      if (params){
        // getBlogByTitle()
        this.blogService.getBlogByTitle(blogTitle).subscribe(value => {
          console.log("Blog: ")
          console.log(value)
          this.currentBlog = value[0];
          setTimeout(()=>{
            this.isContentLoaded = true;
          },5000)
        },error => {
          console.log("Error")
        })

      }else  {
        // log error
        console.log("Error")
        this.isContentLoaded = true;
      }
    })

  }

}
