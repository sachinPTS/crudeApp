import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from "../../validators/confirmPassVaidator";
import {LoginService} from '../../services/login.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm:FormGroup;
  errorMessage: string = "";
  apiFlag: boolean = false;
  apiSpinner: boolean = false;
  apiSuccess: boolean = false;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
      email:new FormControl('',[Validators.required,Validators.minLength(6),Validators.email]),
      dob:new FormControl('',[Validators.required]),
      telephone:new FormControl('',[Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999)]),
      role:new FormControl('',[Validators.required])
      
    });
  }
  setValidator() {
    this.registrationForm.controls["confirmPassword"].setValidators([
      Validators.required,
      Validators.minLength(6),
      confirmPasswordValidator(this.registrationForm.get("password").value),
    ]);
  }
  submitForm(){
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.invalid) {
      return;
    }
    console.log(this.registrationForm)

    this.loginService.checkRegistration(this.registrationForm).subscribe(
      (response:any)=>{
        this.apiFlag = true;
        this.apiSuccess = response.Status ? true : false;
        this.errorMessage = response.Message;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  clearFun() {
    this.registrationForm.reset();
  }

}
