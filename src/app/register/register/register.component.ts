import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  password:any;
  confirmPass:any;
  email:any;
  name:any;


  constructor(private AuthService :AuthService){}

  addUser(){
let newUser= {
    
  "name": this.name,
  "email": this.email,
  "password": this.password,
  "passwordConfirm":this.confirmPass
}
    this.AuthService.register(newUser).subscribe(res=>{
      console.log(res)
    })
  }
}
