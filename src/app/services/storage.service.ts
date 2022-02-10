import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setUserData(data){
    localStorage.setItem('user',JSON.stringify(data));
  }
  getUserData(){
    return JSON.parse(localStorage.getItem('user'));
  }
  clearUserData(){
    localStorage.removeItem('user');
  }
}
