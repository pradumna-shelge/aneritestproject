import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from './gard/simple.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { SecoundGuard } from './secound.guard';

const routes: Routes = [

  {path:'home',component:HomepageComponent,
canDeactivate:[SecoundGuard]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
{path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
canActivate:[SimpleGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
