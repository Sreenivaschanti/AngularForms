import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RFormsComponent } from './rforms/rforms.component';

const routes: Routes = [
{path:'',component:RFormsComponent},
{path:'admin',loadChildren:()=>import('./admin-module/admin-module.module').then(x=>x.AdminModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
