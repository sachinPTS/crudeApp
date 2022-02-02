import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';

const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"registration",component:RegistrationComponent},
{path:"forgotPassword",component:ForgotpassComponent},
{path:"",redirectTo:"login",pathMatch:"full"},
{path:"**",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ForgotpassComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
