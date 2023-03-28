import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 
import { NgbAlertModule, NgbModule, NgbPagination, NgbPaginationModule , } from '@ng-bootstrap/ng-bootstrap';


import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TestDetialsComponent } from './components/test-detials/test-detials.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    TestDetialsComponent
  ],
  imports: [
    CommonModule,NgbRatingModule,
    NgbAlertModule, NgbModule, NgbPagination, NgbPaginationModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
