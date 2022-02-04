import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  checkLogin(f){
  let data={UserEmail:f.value.userName,
  UserPassword:f.value.password}
  return this.http.post("http://angular.pureecosoft.com/api/user/Login",data);
  }

  checkRegistration(f:FormGroup){
   
    let data={
      UserName:f.value.userName,
      UserEmail:f.value.email,
      UserPassword:f.value.password,
      UserDOB:f.value.dob,
      UserMobile:f.value.telephone,
      UserRole:f.value.role
    }
    return this.http.post("http://angular.pureecosoft.com/api/user/Registration",data);
    }
}
