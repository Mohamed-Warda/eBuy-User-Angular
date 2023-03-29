import { Component } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'warning',
        title: 'Oops..',
        text: 'Please fill all the fields correctly!',
        footer: 'Please try again',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#ffd333',
      });
    } else {
      this.orderService
        .sendOrderAddress(alias, detailed, phone)
        .subscribe((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your order has been placed!',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#ffd333',
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = '/';
            }
          });
        });
    }
  }
}
