import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

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
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
