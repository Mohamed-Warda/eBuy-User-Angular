import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { UserEditProfileComponent } from './components/user-edit-profile/user-edit-profile.component';
import { UserPasswordComponent } from './components/user-password/user-password.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserAddressesComponent } from './components/user-addresses/user-addresses.component';



@NgModule({
  declarations: [
    UserComponent,
    UserEditProfileComponent,
    UserPasswordComponent,
    UserDeleteComponent,
    UserAddressesComponent

  ],
  imports: [
    CommonModule,
    FormsModule

  ]
})
export class UserModule { }
