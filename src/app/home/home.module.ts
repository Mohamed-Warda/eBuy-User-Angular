import { NgModule } from '@angular/core';
import { MyHomeComponent } from './my-home/my-home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { NgIf,NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 



@NgModule({
  declarations: [
    MyHomeComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgIf,
    NgFor,
    RouterModule,
    NgbRatingModule
  ],
  exports:[MyHomeComponent]
})



export class HomeModule { }
