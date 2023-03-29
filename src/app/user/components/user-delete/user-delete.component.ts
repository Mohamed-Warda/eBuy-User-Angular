import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
  user:any;
  constructor( private UserService:UserService, private router: Router){ }

  delete(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
            this.UserService.deleleUser().subscribe(res=>{
              Swal.fire(
                'Deleted!',
                'Your Account has been deleted.',
                'success'
              ).then((res)=>{
                this.router.navigate(['/login']);

              })
         
        })
       
      }
    })
   
   
    
   
   }
}
