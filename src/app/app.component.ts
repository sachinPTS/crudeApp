import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudeApp';
  isLoading =false;;
  constructor(private loaderService:LoaderService){
this.loaderService.isLoading.subscribe((res)=>{
  this.isLoading=res
})
  }
}
