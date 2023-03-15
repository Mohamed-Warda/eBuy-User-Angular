import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SharedModule { }
