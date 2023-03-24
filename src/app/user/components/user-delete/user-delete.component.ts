import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
  user:any;
  constructor( private UserService:UserService){ }

  delete(){
 
   if( confirm("Are You Sure"))
   {
    this.UserService.deleleUser().subscribe(res=>{
      console.log(res);
    })
   }
   }
}
