import { Component ,Input} from '@angular/core';
import { AddressService } from 'src/app/_services/address.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserComponent {

  profile:boolean =true;
  setting:boolean =false;
  address:boolean=false ;
  user:any ;


  ngOnChanges(){
    console.log(this.profile)
  }

  constructor( private UserService:UserService, private AddressService:AddressService){ }

 ngOnInit():void
  {
    this.UserService.getUser().subscribe(res=>{
      this.user=res.data;
    })
  }





 openProfile(){
this.profile=true;
this.setting=false;
 }
 editProfile(){
  this.profile=false;
  this.setting=true;
 }




 



 // add address



 }

