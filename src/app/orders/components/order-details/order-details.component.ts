import { Component } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent {
  cartItems: any;
  cart: any;
  orders: any;
  constructor(private OrderService: OrderService) {}

  handleImageError(event:Event) {
    const img = event.target as HTMLImageElement;
  img.src = 'https://placehold.co/600x400/png';
  }

  ngOnInit(): void {
    //get cart Items and Product Id in them
    this.OrderService.getOrders().subscribe((res) => {
      console.log(res.data);
      this.orders = res.data;

   
    });

    
  }
}
