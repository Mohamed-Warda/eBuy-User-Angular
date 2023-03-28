import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 
  user:any='';
  constructor( private UserService:UserService){ 
    this.UserService.getUser().subscribe(res=>{
      this.user=res.data.email;
      
     
    })

   
  }
  logOut()
  {
    localStorage.removeItem('token');
    window.open('http://localhost:4200')
  }
 



}
