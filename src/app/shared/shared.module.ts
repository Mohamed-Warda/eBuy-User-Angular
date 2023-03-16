import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SharedModule { }
