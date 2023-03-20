import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { WishListComponent } from './wishlist/wish-list/wish-list.component';

const routes:Routes=[
  {path:'product',component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'wishing-list',component:WishListComponent},
  {path:'',redirectTo:'product',pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
