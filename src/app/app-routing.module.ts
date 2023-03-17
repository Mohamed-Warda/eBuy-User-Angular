import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';



const routes:Routes=[
  {path:'product',component:ProductListComponent},
  {path:'product-details',component:ProductDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
