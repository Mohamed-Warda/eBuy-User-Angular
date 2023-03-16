import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,NgbRatingModule
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
