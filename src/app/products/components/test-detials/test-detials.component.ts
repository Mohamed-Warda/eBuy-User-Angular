import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/_services/products.service';
import { Location } from '@angular/common';
import { query } from '@angular/animations';
import { IProduct } from 'src/app/_models/iproduct';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-detials',
  templateUrl: './test-detials.component.html',
  styleUrls: ['./test-detials.component.css'],
})
export class TestDetialsComponent implements OnInit {
  products: IProduct[] = [];
  reviewes: any[]=[];
  id: any;
  x: any;
  i: number = 0;
  product: any;
    // @ts-ignore
  userForm: FormGroup;
  // stars: string[] = ['1', '2', '3', '4', '5'];
  stars = [{ rate: 1 }, { rate: 2 }, { rate: 3 }, { rate: 4 }, { rate: 5 }];
  isClicked = false;

  arrayImages: string[] = ['cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg', 'cat-4.jpg'];
  img = this.arrayImages[this.i];
  currentProduct: any;

  constructor(
    private ProductsService: ProductsService,
    private loction: Location,
    private ActiceRooter: ActivatedRoute,
    private fb: FormBuilder
  ) {}
 

  ngOnInit(): void {
    this.getReviewes();
    console.log(window.location.href);
    let y = window.location.href.split('/');
    this.x = y[y.length - 1];
    console.log(this.x);
    this.ProductsService.getSingelProudect(this.x).subscribe((res) => {
      console.log(res.data);
      this.product = res.data;
    });
    // this.startshow()
  
   
    this.userForm = this.fb.group({
      _id: [''],
      Review: [''],
      name: [''],
      email: [''],
    });
  }

  next() {
    this.i++;
    if (this.i >= this.arrayImages?.length) this.i = 0;
    this.img = this.arrayImages[this.i];
  }

  back() {
    this.i--;
    if (this.i < 0) this.i = this.arrayImages?.length - 1;
    this.img = this.arrayImages[this.i];
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
  addToCart(id: string, color:string){
    let cart={"productId":id,"color":color};
    this.ProductsService.addToCart(cart).subscribe((res)=>{
      console.log(res);
     
     })
    }

  startshow() {
    setInterval(this.next, 1000);
  }

  rating: number=0;

  get FormCtrls() {
    return this.userForm.controls;
  }
  // save() {
  //  var data= [
  //     {
  //       _id: this.FormCtrls['_id'].value,
  //       title: this.currentProduct.title,
  //       ratings: this.rating,
  //       user: {
  //         // Review: this.FormCtrls['Review'].value,
  //         // name: this.FormCtrls['name'].value,
  //         // email: this.FormCtrls['email'].value,
  //         _id:localStorage.getItem("_id") ,
  //         name:localStorage.getItem("name")
  //       },
  //       product: this.currentProduct._id,
  //     },
  //   ];
  //   this.currentProduct=data;

  //  console.log(data);
  //  this.FormCtrls['controls'].reset();
  // }

  save() {
    var data = {
      title: this.userForm.controls['Review'].value,
      ratings: this.rating,
      user: localStorage.getItem('_id'),

      product: this.currentProduct._id,
    };

    this.currentProduct = data;
    console.log(data);
    this.ProductsService.save(data).subscribe((res) => {
      console.log(res);
      this.getReviewes()
      this.userForm?.reset();
    });
  }

  edit() {
    this.userForm.patchValue(this.currentProduct);
  }

  CurrentRate: number = 0;
  rate(item: number) {
    this.rating = item;
    this.CurrentRate = item;
  }

  sendId(product: any) {
    this.currentProduct = product;
  }
  // user: {
  //   Review: this.FormCtrls['Review'].value,
  //   name: this.FormCtrls['name'].value,
  //   email: this.FormCtrls['email'].value,
  // },

  getReviewes() {
    this.ProductsService.getReviewes().subscribe((res: any) => {
      this.reviewes = res.data;
    });
  }
}
