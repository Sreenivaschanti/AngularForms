import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RFormsComponent implements OnInit {
  model:any={firstName:''};
  myForm:any={userName:'',password:''};
  myformGroup:any;
  constructor() { }

  ngOnInit(): void {
    console.log("in Rforms")
    this.myformGroup=new FormGroup(
     {
       userName : new FormControl(this.myForm.userName,[Validators.required,Validators.maxLength(4)]),
       password : new FormControl()
     }
   )
  }
  submitForm(form:any)
  {
  console.log(form);
  console.log(this.model.firstName);
  }

}
