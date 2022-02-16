import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {TableModule} from 'primeng/table';

import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {ProductService} from './services/product.service';
import { ProductComponent } from './components/product/product.component'
const routes: Routes = [
  {path:"user",component:UserDashboardComponent},
  {path:"admin",component:AdminDashboardComponent},
  {path:"addProduct/:action",component:ProductComponent},
  {path:"editProduct/:action/:id",component:ProductComponent},
  {path:"viewProduct/:action/:id",component:ProductComponent},
  {path:"",redirectTo:"user",pathMatch:"full"},
  {path:"**",redirectTo:"user",pathMatch:"full"}
  ];

@NgModule({
  declarations: [UserDashboardComponent, AdminDashboardComponent, ProductComponent],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[ProductService]
})
export class DashboardModule { }
