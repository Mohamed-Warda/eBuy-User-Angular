import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderAddressComponent } from './components/order-address/order-address.component';
import { OrderSavedAddressComponent } from './components/order-saved-address/order-saved-address.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrderAddressComponent,
    OrderSavedAddressComponent,
   
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
