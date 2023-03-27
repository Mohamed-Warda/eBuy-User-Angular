import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { MyHomeComponent } from './home/my-home/my-home.component';
import { OrderDetailsComponent } from './orders/components/order-details/order-details.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { UserAddressesComponent } from './user/components/user-addresses/user-addresses.component';
import { UserDeleteComponent } from './user/components/user-delete/user-delete.component';
import { UserComponent } from './user/components/user-details/user-details.component';
import { UserEditProfileComponent } from './user/components/user-edit-profile/user-edit-profile.component';
import { UserPasswordComponent } from './user/components/user-password/user-password.component';
import { WishListComponent } from './wishlist/wish-list/wish-list.component';
import { TestDetialsComponent } from './products/components/test-detials/test-detials.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes:Routes=[
  // route for Home page
  {path:'',component:MyHomeComponent},
  {path:'products',component:ProductListComponent},
  {path:'product-details/',component:ProductDetailsComponent},
  {path:'product-detail/:id',component:TestDetialsComponent},

  {path:'contactUs',component:ContactUsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  
  {path:'cart',component:CartComponent},
  {path:'orders',component:OrderDetailsComponent},
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
