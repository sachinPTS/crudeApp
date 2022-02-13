import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {ProductService} from './services/product.service'
const routes: Routes = [
  {path:"user",component:UserDashboardComponent},
  {path:"admin",component:AdminDashboardComponent},

  {path:"",redirectTo:"user",pathMatch:"full"},
  {path:"**",redirectTo:"user",pathMatch:"full"}
  ];

@NgModule({
  declarations: [UserDashboardComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[ProductService]
})
export class DashboardModule { }
