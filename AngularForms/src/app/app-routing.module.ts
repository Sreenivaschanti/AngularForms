import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RFormsComponent } from './rforms/rforms.component';

const routes: Routes = [
{path:'',component:RFormsComponent},
{path:'admin',loadChildren:()=>import('./admin-module/admin-module.module').then(x=>x.AdminModuleModule)},
{path:'adminUsers',loadChildren:'./admin-module/admin-module.module#AdminUsersComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
