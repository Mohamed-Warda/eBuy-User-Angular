import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';

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


  constructor(private AuthService :AuthService, private router: Router){

  }

  addUser(){
let newUser= {
    
  "name": this.name,
  "email": this.email,
  "password": this.password,
  "passwordConfirm":this.confirmPass
}
    this.AuthService.register(newUser).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'Welcome',
       
        confirmButtonText: 'Ok',
        confirmButtonColor: '#ffd333',
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);

        }
      });
    })
    
  }
}
