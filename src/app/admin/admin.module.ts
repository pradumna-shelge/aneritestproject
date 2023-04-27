import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

console.log("admin");

@NgModule({
  declarations: [
    HomepageComponent,
    AdminpageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
