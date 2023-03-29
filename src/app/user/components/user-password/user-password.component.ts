import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.css']
})
export class UserPasswordComponent {
  password:any;
  conPass:any;
  user:any ;

  constructor( private UserService:UserService, private router: Router,private authService: AuthService){ }
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
    this.UserService.changePassword(pass).subscribe((result:any)=>{
      localStorage.setItem('token', result?.token);
      localStorage.setItem('user', JSON.stringify(result?.data));
      this.authService.setupUserProfile();

     Swal.fire({
        icon: 'success',
        title: 'Updated',
       
        confirmButtonText: 'Ok',
        confirmButtonColor: '#ffd333',
      }).then((result) => {
        this.router.navigate(['/']);

      });
    })
   }
}
