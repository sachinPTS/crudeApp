import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from '../../../services/storage.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
user;
  constructor(private storageService:StorageService, private router:Router) { }

  ngOnInit(): void {
    this.user=this.storageService.getUserData();

  }
  logOut(){
    this.storageService.clearUserData();
this.router.navigate(['/login/login']);
  }

}
