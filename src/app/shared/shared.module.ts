import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { RatingComponent } from './rating/rating.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SharedModule { }
