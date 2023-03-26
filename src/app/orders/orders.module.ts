import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderAddressComponent } from './components/order-address/order-address.component';



@NgModule({
  declarations: [
    OrderDetailsComponent,
    OrderAddressComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
