import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent,ProfileComponent]
})
export class SharedModule { }
