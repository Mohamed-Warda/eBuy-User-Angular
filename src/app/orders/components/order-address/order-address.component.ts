import { Component } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-address',
  templateUrl: './order-address.component.html',
  styleUrls: ['./order-address.component.css'],
})
export class OrderAddressComponent {
  constructor(private orderService: OrderService) {}

  sendOrderAddress(alias: string, detailed: string, phone: string) {
    if (
      !alias ||
      !detailed ||
      !phone ||
      alias == '' ||
      detailed == '' ||
      phone == '' ||
      alias == null ||
      detailed == null ||
      phone == null ||
      alias.length < 3 ||
      detailed.length < 10 ||
      phone.length < 11
    ) {
      alert('Please fill all fields correctly');
      return;
    } else {
      this.orderService
        .sendOrderAddress(alias, detailed, phone)
        .subscribe((res) => {
          console.log(res);
          alert(res.message);
        });
    }
  }
}
