import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username="";
password="";
  constructor() { }

  ngOnInit(): void {
  }
  submitForm(form:NgForm,username){
console.log(form,username);
  }

}
