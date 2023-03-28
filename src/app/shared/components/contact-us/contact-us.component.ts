import { Component } from '@angular/core';
import {Contact} from './contactUs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
model = new Contact();
submitted= false;
error={};
constructor(){}
ngOnInit(){

}
onSubmit(){
//   this.submitted= true;
//    return this.s
//   data=>this.model=data,
//  error=> this.error =this.error;
}
}
