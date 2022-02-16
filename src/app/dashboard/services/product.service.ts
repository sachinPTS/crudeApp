import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
    addProduct(form: FormGroup) {
      let data = {
        Product_Name: form.get("productName").value,
        Product_Size: form.get("productSize").value,
        Product_Color: form.get("productColor").value,
        Product_Price: form.get("productPrice").value,
        Product_URl: form.get("productUrl").value,
      };
      return this.http.post(
        "http://angular.pureecosoft.com/api/product/Add",
        data
      );
    }
    editProduct(id, form: FormGroup) {
      let data = {
        Product_ID: id,
        Product_Name: form.get("productName").value,
        Product_Size: form.get("productSize").value,
        Product_Color: form.get("productColor").value,
        Product_Price: form.get("productPrice").value,
        Product_URl: form.get("productUrl").value,
      };
      return this.http.post(
        "http://angular.pureecosoft.com/api/product/Update",
        data
      );
    }
    getProductById(id) {
      return this.http.get(
        `http://angular.pureecosoft.com/api/product/GetbyId?id=${id}`
      );
    }
}
