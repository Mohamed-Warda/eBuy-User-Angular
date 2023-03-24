import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent {
  password:any;
  conPass:any;
  user:any ;

  constructor( private UserService:UserService){ }
  ngOnInit():void
  {
    this.UserService.getUser().subscribe(res=>{
      this.user=res.data;
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
}
