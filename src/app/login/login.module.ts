import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';

const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"registration",component:RegistrationComponent},
{path:"forgotPassword",component:ForgotpassComponent}

];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ForgotpassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
