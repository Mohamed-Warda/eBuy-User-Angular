import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';
import { Location } from '@angular/common';
import { query } from '@angular/animations';
import { IProduct } from 'src/app/_models/iproduct';

@Component({
  selector: 'app-test-detials',
  templateUrl: './test-detials.component.html',
  styleUrls: ['./test-detials.component.css']
})
export class TestDetialsComponent implements OnInit {
id:any
x:any
i:number=0
product:any

arrayImages: string[] = ['cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg', 'cat-4.jpg'];
img=this.arrayImages[this.i]
currentProduct: any;
  constructor(private ProductsService: ProductsService,private loction:Location,private ActiceRooter:ActivatedRoute,){}
  
  ngOnInit(): void {
console.log(window.location.href)
    let y=window.location.href.split("/")
    this.x=y[y.length-1]
    console.log(this.x)
    this.ProductsService.getSingelProudect(this.x).subscribe(res=>{

console.log(res.data)
this.product=res.data
    })
    this.startshow()

   }

  
  next() {

    this.i++;
    if (this.i >= this.arrayImages.length) this.i = 0;
   this.img= this.arrayImages[this.i];
}
back() {
  this.i--;
  if (this.i <0) this.i = this.arrayImages.length-1
 this.img= this.arrayImages[this.i];

  }
  CurrentQuantity = 1;
  plus(quantity: Number) {
    if (this.CurrentQuantity <= quantity) {
      this.CurrentQuantity++;
    }
  }
  minus(quantity: Number) {
    if (this.CurrentQuantity > 0) {
      this.CurrentQuantity--;
    }
  }
  // addToCart(id: string, color:string){
  //   let cart={"productId":id,"color":color};
  //   this.ProductsService.addToCart(cart).subscribe((res)=>{
  //     console.log(res);
  //     this.Remove(id);
  //    })
  //   }

  
   startshow() {
    
     setInterval(this.next, 1000);

    }
}
