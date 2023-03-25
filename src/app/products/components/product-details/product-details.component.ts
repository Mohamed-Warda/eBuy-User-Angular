import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';
import { ProductsService } from 'src/app/_services/products.service';
import { CartService } from 'src/app/_services/cart.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  products: IProduct[] = [];
  @Input() quentity: number = 1;
  // @Input() data: any ={}
  // @Output() item = new EventEmitter()

  constructor(
    private ProductsService: ProductsService,
    private cartService: CartService,
    private fb: FormBuilder
  ) {}
  currentProduct: any;
  userForm: FormGroup;
  ngOnInit(): void {
    this.ProductsService.getAllProducts().subscribe((res) => {
      this.products = res.data;
      // console.log(this.products[0])
      this.currentProduct = this.products[0];
    });
    this.userForm = this.fb.group({
      _id: [''],
      Review: [''],
      name: [''],
      email: [''],
    });
  }

  // console.log(this.currentProduct);

  arrayImages: string[] = ['cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg', 'cat-4.jpg'];

  prev(i: any) {
    this.currentProduct = this.products[i];
    console.log(i);
  }
  onClick(i: any) {
    console.log('s', i);
    this.currentProduct = this.products[i];
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
  items: IProduct[] = [];
  addToCart(item: IProduct) {
    if (localStorage.getItem('items') == null) {
      item.quantity = this.CurrentQuantity;
      this.items.push(item);
      localStorage.setItem('items', JSON.stringify(this.items));
    } else {
      var arr = localStorage.getItem('items') as string;
      this.items = JSON.parse(arr);
      this.items.push(item);
      localStorage.setItem('items', JSON.stringify(this.items));
      console.log(this.items);
    }
  }
  rating: number;
  get FormCtrls() {
    return this.userForm.controls;
  }
  save() {
   var data= [
      {
        _id: '640f4ae23c56bfd9f3209966',
        title: 'The watch is awesome',
        ratings: this.rating,
        user: {
          Review: this.FormCtrls['Review'].value,
          name: this.FormCtrls['name'].value,
          email: this.FormCtrls['email'].value,
        },
        product: '640f3abcb8f1d9bc5ed59135',
      },
    ];
   this.ProductsService.saveRating(data);
  }
  stars: number[] = [1, 2, 3, 4, 5];
  rate(item: number) {
    this.rating = item;
  }
}
