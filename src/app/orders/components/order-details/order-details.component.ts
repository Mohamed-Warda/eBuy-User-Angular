import { Component } from '@angular/core';
import { OrderService } from 'src/app/_services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
  cartItems:any;
  cart:any;
  constructor(private OrderService :OrderService){}

  ngOnInit():void
  {
      //get cart Items and Product Id in them
    this.OrderService.getOrders().subscribe(res=>{
      console.log(res)
     
    })
      

  }
}
