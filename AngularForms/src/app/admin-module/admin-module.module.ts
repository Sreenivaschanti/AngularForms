import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ColorChangerDirective } from '../shared-module/color-changer.directive';

const routes: Routes = [  
  {path : '', component :AdminPageComponent},  
  {path : 'users', component :AdminUsersComponent}
];  
    


@NgModule({
  declarations: [
    AdminPageComponent,
    AdminUsersComponent,
    //ColorChangerDirective  
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModuleModule  
  ],
  exports: [RouterModule]  
})
export class AdminModuleModule { }
