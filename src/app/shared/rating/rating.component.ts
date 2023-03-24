import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

    ratingValue = 3.3;
    stars: string[] = [];
  
    ngOnInit() {
      const filledStars = Math.floor(this.ratingValue);
      const hasHalfStar = this.ratingValue % 1 !== 0;
      const outlinedStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
  
      for (let i = 0; i < filledStars; i++) {
        this.stars.push('-fill');
      }
  
      if (hasHalfStar) {
        this.stars.push('-half');
      }
  
      for (let i = 0; i < outlinedStars; i++) {
        this.stars.push('');
      }
    }
  }
  
