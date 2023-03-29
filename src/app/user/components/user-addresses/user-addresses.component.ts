import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/_services/address.service';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.css'],
})
export class UserAddressesComponent {
  constructor(
    private UserService: UserService,
    private AddressService: AddressService
    , private router: Router
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
      

      Swal.fire({
        icon: 'success',
        title: 'Added',
       
        confirmButtonText: 'Ok',
        confirmButtonColor: '#ffd333',
      }).then((result) => {
       this.ngOnInit();
      });
    });

    console.log(this.addressTitle);
    console.log(this.details);
  }
  deleteAddress(address:any)
  {
    this.AddressService.deleteUserAdress(address).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'Deleted',
       
        confirmButtonText: 'Ok',
        confirmButtonColor: '#ffd333',
      }).then((result) => {
       this.ngOnInit();
      });
    })
  }
}
