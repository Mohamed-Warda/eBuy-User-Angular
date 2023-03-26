import { Component } from '@angular/core';
import { AddressService } from 'src/app/_services/address.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.css'],
})
export class UserAddressesComponent {
  constructor(
    private UserService: UserService,
    private AddressService: AddressService
  ) {}

  addressTitle: any;
  details: any;
  phoneNum: any;
  newAddress = false;
  user: any;
  ngOnInit(): void {
    this.UserService.getUser().subscribe((res) => {
      this.user = res.data;
    });
  }
  addAddress() {
    let address = {
      alias: this.addressTitle,
      details: this.details,
      phone: this.phoneNum,
    };
    this.AddressService.addUserAddress(address).subscribe((res) => {
      console.log(res);
      this.addressTitle = this.details = this.phoneNum = '';
      this.newAddress = false;
      this.ngOnInit();
    });

    console.log(this.addressTitle);
    console.log(this.details);
  }
}
