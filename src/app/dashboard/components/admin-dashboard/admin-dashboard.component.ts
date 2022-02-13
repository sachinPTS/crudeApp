import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from '../../../services/storage.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
user;
productArr=[]
  constructor(private storageService:StorageService, 
    private router:Router,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.user=this.storageService.getUserData();
    this.productService.getAllProducts().subscribe(
      (response:any)=>{
        console.log(response)
        this.productArr=response.Data;
      },
      (error)=>{
        console.log("Error loading product list")
      }
    )

  }
  logOut(){
    this.storageService.clearUserData();
this.router.navigate(['/login/login']);
  }

}
