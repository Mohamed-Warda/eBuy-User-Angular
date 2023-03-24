import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { MyHomeComponent } from './home/my-home/my-home.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { UserAddressesComponent } from './user/components/user-addresses/user-addresses.component';
import { UserDeleteComponent } from './user/components/user-delete/user-delete.component';
import { UserComponent } from './user/components/user-details/user-details.component';
import { UserEditProfileComponent } from './user/components/user-edit-profile/user-edit-profile.component';
import { UserPasswordComponent } from './user/components/user-password/user-password.component';
import { WishListComponent } from './wishlist/wish-list/wish-list.component';

const routes:Routes=[
  // route for Home page
  {path:'',component:MyHomeComponent},
  {path:'products',component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'wishing-list',component:WishListComponent},
  {path:'profile',component:ProfileComponent,children:[{path:"edit",component:UserEditProfileComponent},{path:"change-password",component:UserPasswordComponent},
  {path:"addresses",component:UserAddressesComponent},
  {path:"delete",component:UserDeleteComponent},{path:"**",component:UserComponent}]},
  {path:'',redirectTo:'product',pathMatch:'full'},
  {path:'productItem',redirectTo:'product',pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
