import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from './admin-users/admin-users.component';

const routes: Routes = [  
  {path : '', component :AdminPageComponent},  
];  
    


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ],
  exports: [RouterModule]  
})
export class AdminModuleModule { }
