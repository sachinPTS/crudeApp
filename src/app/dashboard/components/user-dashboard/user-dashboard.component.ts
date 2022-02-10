import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../../services/storage.service';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user;
  constructor(private storageService:StorageService) { }

  ngOnInit(): void {
    this.user=this.storageService.getUserData();
  }

}
