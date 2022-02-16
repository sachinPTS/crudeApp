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
searchTxt='';
  constructor(private storageService:StorageService, 
    private router:Router,
    private productService:ProductService) { }

  ngOnInit(): void {
    this.user=this.storageService.getUserData();
    this.getAllProductList()

  }
  deleteProduct(id,name){
    let bool=confirm("Are you sure to delete "+name);
    if(bool){
      this.productService.deleteProduct(id).subscribe(
        (response)=>{
          console.log('deleted , ',response)
          this.getAllProductList()
        },
        (error)=>{
          console.log(error)
        }
      )
    }
    
  }
  filterProductArr(){
    console.log(this.searchTxt)
    this.productArr=this.productService.getProductList().filter(
      (prod) => prod.Product_Name.indexOf(this.searchTxt) > -1 || prod.Product_Price.indexOf(this.searchTxt) > -1
    );
  }
  getAllProductList(){
    this.productService.getAllProducts().subscribe(
      (response:any)=>{
        console.log(response)
        this.productService.setProductList(response.Data)
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
