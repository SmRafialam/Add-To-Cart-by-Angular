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
  priceDefault:number=100;
  totalPrice:number= 0;

  constructor(private api:ApiService ,private cartService: CartService){

  }

  ngOnInit(): void {
    // this.cartService.getCartData().subscribe((res)=>{
    //   console.log(res);
    // })
    // this.api.getProduct().subscribe((res)=>{
    //   Object.assign(res,{quantity:this.quantity,total:res.this.priceDefault})
    // })

  }


  i=1;
  plus(){
    if(this.i != 20){
      this.i ++;
      this.quantity = this.i;
    }
  }

  minus(){
    // alert("ok");
    if(this.i != 1)
    this.i --;
    this.quantity = this.i;
  }

}
