import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AdminUsersComponent } from '../admin-users/admin-users.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit,AfterViewInit {
  @ViewChild(AdminUsersComponent) users: any;
 item:number[]=[];
 message:string='';
 message2:string='';
 parentmessage:string='Message from parent to child';
  constructor() { }

  ngOnInit(): void {
    this.item=[1,2,3,4,10,15,25,27]
  }
  ngAfterViewInit(): void {
      this.message=this.users.message;
  }
  recdMessage($event: string)                         
  {
this.message2=$event;
  }
}
