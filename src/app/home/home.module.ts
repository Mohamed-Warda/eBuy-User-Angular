import { NgModule } from '@angular/core';
import { MyHomeComponent } from './my-home/my-home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { NgIf,NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MyHomeComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgIf,
    NgFor,
    RouterModule
  ],
  exports:[MyHomeComponent]
})



export class HomeModule { }
