import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ForgotpassComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
