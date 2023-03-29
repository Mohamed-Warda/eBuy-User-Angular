import { Component } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-saved-address',
  templateUrl: './order-saved-address.component.html',
  styleUrls: ['./order-saved-address.component.css']
})
export class OrderSavedAddressComponent {
  
  constructor(private orderService: OrderService) { }
   savedAddresses: any;
  // get saved addresses when component is loaded
  ngOnInit(): void {
    this.orderService.getOrders().subscribe((res) => {
      console.log(res);
    });

    this.orderService.getSavedAddresses().subscribe((res) => {
      console.log(res);
      this.savedAddresses = res.data;
    });
  }
}
