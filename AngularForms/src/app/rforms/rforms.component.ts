import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("in Rforms")
  }
  // submitForm(form:any)
  // {
  // console.log(form);
  // }

}
