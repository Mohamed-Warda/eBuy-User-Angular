import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { CartService } from 'src/app/_services/cart.service';
import { PaymentMethodsService } from 'src/app/_services/payment-methods.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  addresses: any;
  methodOfPayment: boolean = false;
  choosenAddress: any;
  selectedMethod: string = '';
  isDisabled: boolean = true;
  cartID: String = '';
  constructor(
    private UserService: UserService,
    private CartService: CartService,
    private PaymentMethodsService: PaymentMethodsService
  ) {}
  ngOnInit(): void {
    //get user data
    this.UserService.getUser().subscribe((res) => {
      this.addresses = res.data.addresses;
      // console.log(res.data.addresses[0]._id)
    });

    //get his cart
    this.CartService.getCart().subscribe((res) => {
      this.cartID = res.data._id;
      console.log(this.cartID);
    });
  }

  sendAddress(addressID: any) {
    for (let i = 0; i < this.addresses.length; i++) {
      if (this.addresses[i]._id == addressID) {
        this.choosenAddress = {
          shippingAddress: {
            details: this.addresses[i].details,
            phone: this.addresses[i].phone,
          },
        };
        this.isDisabled = false;
      }
    }
  }

  placeOrder() {
    //@@@@ get the payment method

    const radioButtons = document.getElementsByName(
      'payment'
    ) as NodeListOf<HTMLInputElement>;

    // check first if he choosed

    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        this.selectedMethod = radioButtons[i].value;
        break;
      }
    }
    if (this.selectedMethod == '') {
      this.methodOfPayment = true;
    } else {
      this.methodOfPayment = false;

      //@@ check if its cash of card
      if (this.selectedMethod == 'cash') {
        this.PaymentMethodsService.cashOrder(
          this.choosenAddress,
          this.cartID
        ).subscribe((res) => {
          window.open('http://localhost:4200/orders', '_self');
        });
      } else if (this.selectedMethod == 'card') {
        this.PaymentMethodsService.cardOrder(
          this.choosenAddress,
          this.cartID
        ).subscribe((res: any) => {
          window.open(res.session.url, '_self');
        });
      }
    }
  }
}
