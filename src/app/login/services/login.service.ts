import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
