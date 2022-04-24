import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { FilterPipe } from './filter.pipe';

const routes: Routes = [  
  {path : '', component :AdminPageComponent},  
];  
    


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminUsersComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ],
  exports: [RouterModule]  
})
export class AdminModuleModule { }
