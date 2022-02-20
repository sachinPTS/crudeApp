import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoaderService} from './services/loader.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [LoaderService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
