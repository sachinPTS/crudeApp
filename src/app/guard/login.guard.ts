import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from '../services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private storageService:StorageService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let data=this.storageService.getUserData();
      if(data){
        if(data.UserRole==1){
          this.router.navigate(['/dashboard/admin']);
        }else{
          this.router.navigate(['/dashboard/user']);
        }
        return false;
      }
      
      return true;
  }
  
}
