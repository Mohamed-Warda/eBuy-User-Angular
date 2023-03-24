import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  appear:boolean=false;
   changeColor(button:any) {
    // Get all buttons in the group
    var buttons = document.querySelectorAll('.button-group button');
    
    // Remove active class from all buttons
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    console.log(button)

    // Add active class to clicked button
    button.classList.add('active');
  }
}
