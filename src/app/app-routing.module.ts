import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component';


const routes:Routes=[
  // Home , ProductListComponent , productPage , Cart , 404
  {path:'product',component:ProductListComponent},

  // { path:'productDetail/:id',component:ProductDetailComponent},
  // { path:'cart',component:CartComponent},
  // { path:'checkout',component:CheckoutComponent},

  {path:'',redirectTo:'product',pathMatch:'full'},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
