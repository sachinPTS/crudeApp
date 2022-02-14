import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private productOrigionalArr=[]
  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get("http://angular.pureecosoft.com/api/product/list");
    }
    deleteProduct(id){
      return this.http.post(`http://angular.pureecosoft.com/api/product/Delete?id=${id}`,{});
    }
    setProductList(list){
      this.productOrigionalArr=list;
    }
    getProductList(){
      return this.productOrigionalArr;
    }
}
