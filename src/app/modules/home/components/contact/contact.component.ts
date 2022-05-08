import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: FormGroup;

  constructor(private fb:FormBuilder) {
    this.contact = fb.group({
      name:["Hisham",[Validators.required]],
      email:["hishamkhartoum@gmail.com",[Validators.required]],
      phone:["00966503752342",[Validators.required]],
      subject:["Hello Hello",[Validators.required]],
      message:["Test test test test test",[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contact);
  }
}
