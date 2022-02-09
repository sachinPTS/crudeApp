import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username="";
password="";
errorStr=null;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  submitForm(form:NgForm,username){
    this.errorStr=null;
if(form.invalid){
  return;
}
this.loginService.checkLogin(form).subscribe(
  (response:any)=>{
    console.log('success',response);
    if(response.Status){
      if(response.Data.UserRole==1){
        this.router.navigate(['/dashboard/admin']);
      }else{
        this.router.navigate(['/dashboard/user']);
      }
      
    }
    else{
  this.errorStr=response.Message
    }
  },
  (error)=>{
    console.log('error',error)
  }
)

  }
  clearFun(f:NgForm){
    f.reset();
  }

}
