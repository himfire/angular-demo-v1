import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isContentLoad:boolean = false ;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isContentLoad = true;
    },100)
  }

}
