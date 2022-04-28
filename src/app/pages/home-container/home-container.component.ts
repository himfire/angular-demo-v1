import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor() { }
  isContentLoad: boolean = false;
  ngOnInit(): void {
    setTimeout(()=>{
      this.isContentLoad = true;
    },100)
  }

}
