import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor() { }
message:string='Hello parent from child';
@Input() childmessage:any;
newMessage:string='i am your child';
@Output() messageEvent = new EventEmitter<string>();
  ngOnInit(): void {

  }

  sendMessage():void{
this.messageEvent.emit('Hi '+this.message+Math.random())
  }

}
