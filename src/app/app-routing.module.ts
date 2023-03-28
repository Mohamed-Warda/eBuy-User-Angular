import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { MyHomeComponent } from './home/my-home/my-home.component';
import { OrderDetailsComponent } from './orders/components/order-details/order-details.component';
import { OrderAddressComponent } from './orders/components/order-address/order-address.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { UserAddressesComponent } from './user/components/user-addresses/user-addresses.component';
import { UserDeleteComponent } from './user/components/user-delete/user-delete.component';
import { UserComponent } from './user/components/user-details/user-details.component';
import { UserEditProfileComponent } from './user/components/user-edit-profile/user-edit-profile.component';
import { UserPasswordComponent } from './user/components/user-password/user-password.component';
import { WishListComponent } from './wishlist/wish-list/wish-list.component';
import { ErrorNotFoundComponent } from './notfound/error-not-found/error-not-found.component';
import { FAQComponent } from './faq/faq/faq.component';
import { OrderSavedAddressComponent } from './orders/components/order-saved-address/order-saved-address.component';
import { CheckoutComponent } from './checkout/components/checkout/checkout.component';
import {LoginComponent} from "./login/components/login/login.component";
import {MainComponent} from "./main/main.component";
import { RegisterComponent } from './register/register/register.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { TestDetialsComponent } from './products/components/test-detials/test-detials.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  { path: '', component: MainComponent,
    children: [
      { path: '', component: MyHomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'cart', component: CartComponent,canActivate:[AuthGuard] },
      { path: 'checkout', component: CheckoutComponent ,canActivate:[AuthGuard]},
      { path: 'orders', component: OrderDetailsComponent,canActivate:[AuthGuard] },
      { path: 'order-address', component: OrderAddressComponent,canActivate:[AuthGuard] },
      { path: 'wishing-list', component: WishListComponent ,canActivate:[AuthGuard]},
      {path:'product-details/',component:ProductDetailsComponent},
      {path:'product-detail/:id',component:TestDetialsComponent},
    
      {path:'contactUs',component:ContactUsComponent},
      {path:'aboutUs',component:AboutUsComponent},
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          { path: 'edit', component: UserEditProfileComponent },
          { path: 'change-password', component: UserPasswordComponent },
          { path: 'addresses', component: UserAddressesComponent },
          { path: 'delete', component: UserDeleteComponent },
          { path: '**', component: UserComponent },
        ],canActivate:[AuthGuard]
      },
      {
        path:'address',

        children:[
          {path:'newAddress', component:OrderAddressComponent},
          {path:'savedAddresses', component:OrderSavedAddressComponent},
        ],canActivate:[AuthGuard]
      },
      { path: 'productItem', redirectTo: 'product', pathMatch: 'full' },
      { path: 'faq', component: FAQComponent },
    ]
  },

  { path: '**', component: ErrorNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
