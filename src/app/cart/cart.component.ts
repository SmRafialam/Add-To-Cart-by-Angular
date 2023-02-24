import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  @Input() item:any;
  quantity:number=1;
  totalPrice: number = 0
  priceDefault:number=100;
  public productLists:any = [];
  public cartLists: any = [];


  constructor(private api:ApiService ,private cartService: CartService){

  }

  ngOnInit(): void {
    //this.getCartItems();
    this.cartService.getCartData$().subscribe({
    next: (res) => {
      this.cartLists = res;
      console.log(this.cartLists);
    },
    error:(err) => {
      console.log(err);
    },
    complete:() => {
      console.log("Done!");
    }
  });
    //this.getCartItems();
  }

  // getCartItems() {
  //   const localCartData = localStorage.getItem('cartData');
  //   if(localCartData !== null) {
  //     this.cartService.setCartData(JSON.parse(localCartData));
  //   }
  // }

  i=1;
  plus(){
    if(this.i != 20){
      this.i ++;
      this.quantity = this.i;
      this.totalPrice +=  this.priceDefault * this.quantity;
      console.log(this.quantity,this.totalPrice);
    }
  }

  minus(){
    // alert("ok");
    if(this.i != 1)
    this.i --;
    this.quantity = this.i;
    this.totalPrice -= this.priceDefault * this.quantity;
    console.log(this.quantity,this.totalPrice);

  }

  setStyle(){
    const id = localStorage.getItem('id');
    const currentQuantity = localStorage.getItem('quantity');
    const currentPrice = localStorage.getItem('price');
  }



}
