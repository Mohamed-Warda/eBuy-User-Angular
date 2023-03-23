import { Component ,Input} from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  profile:boolean =true;
  setting:boolean =false;
  address:boolean=false ;
 newEmail:any;
 newName:any;
 newPhone:any;
 password:any;
 conPass:any;
  ngOnChanges(){
    console.log(this.profile)
  }

  user:any ;
  constructor( private UserService:UserService){ }

 ngOnInit():void
  {
    this.UserService.getUser().subscribe(res=>{
      this.user=res.data;
      this.newEmail=this.user.email;
      this.newName=this.user.name;
      this.newName=this.user.name;
      this.newPhone=this.user.phone? this.user.phone:'';
      console.log(this.user.password)
      

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


 saveProfile(){
let user = {
  _id:this.user._id,
  name: this.newName,
  email: this.newEmail,
  phone:this.newPhone 
}
this.UserService.updateUser(user).subscribe(res=>{
  console.log(res);
})
  
 }

 changePass(){
  console.log("res")

  let pass ={
    _id:this.user._id,
    password:this.password
  }
  this.UserService.changePassword(pass).subscribe(res=>{
    console.log(res)
  })
 }

 delete(){
  let deleteID ={
    _id:this.user._id
  }
 if( confirm("Are You Sure"))
 {
  this.UserService.deleleUser(deleteID).subscribe(res=>{
    console.log(res);
  })
 }
 }
}
