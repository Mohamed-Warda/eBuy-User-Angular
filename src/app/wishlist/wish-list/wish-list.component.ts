import { Component } from '@angular/core';
import { WishingListService } from 'src/app/_services/wishing-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
 
  products:any[]=[];
  
  constructor(private WishingListService:WishingListService){

  }

  ngOnInit():void
  {
    this.WishingListService.getWishingList().subscribe(res=>{
      this.products=res.data;


    })
  }


  addToCart(id: string,color:string){
  let cart={"productId":id,"color":color};
  this.WishingListService.addToCart(cart).subscribe((res)=>{
    console.log(res);
    this.Remove(id);
   })
 

  }
  Remove(id: string){
   this.WishingListService.removeFromCart(id).subscribe(()=>{
    window.location.reload();
   })
  }
}
