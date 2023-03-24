import { Component } from '@angular/core';
import { AddressService } from 'src/app/_services/address.service';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent {
  newEmail:any;
  newName:any;
  newPhone:any;
  user:any ;
  constructor( private UserService:UserService, private AddressService:AddressService){ }

 ngOnInit():void
  {
    this.UserService.getUser().subscribe(res=>{
      this.user=res.data;
      this.newEmail=this.user.email;
      this.newName=this.user.name;
      this.newName=this.user.name;
      this.newPhone=this.user.phone? this.user.phone:'';
      

    })
  }
  saveProfile(){
    let userData = {
     
      name: this.newName,
      email: this.newEmail,
      phone:this.newPhone 
    }
    
    this.UserService.updateUser(userData).subscribe(res=>{
    console.log(res);
    })

     }
}
