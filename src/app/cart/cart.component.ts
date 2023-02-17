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
  public cartLists: any;
  public pricelists:any;

  constructor(private api:ApiService ,private cartService: CartService){

  }

  ngOnInit(): void {

    this.api.getProduct().subscribe((data:any)=>{
      this.productLists = data.list;
      //console.log(this.productLists);
      // this.grandTotal = this.cartService.getTotalPrice();
      // console.log(this.grandTotal);
      // this.productLists.forEach((value:any,index:any)=>{
      // // console.log(value.mvp_variations);
      //   // value.mvp_variations.forEach((val2:any)=>{
      //   //   console.log(val2);
      //   // })
      // })

      // this.grandTotal = this.cartService.getTotalPrice();
      // console.log(this.grandTotal);
      // this.productLists.forEach((a:any) => {
      //   console.log(a);
      //   //Object.assign(a,{quantity:this.quantity , total:a.price});
      // });
    });

    this.cartService.getCartData$().subscribe((res)=>{
      let totalPrice = 0;
      this.cartLists = res;
      // this.totalPrice = this.cartService.getTotalPrice();
      // totalPrice += res * (this.priceDefault) + res * (this.quantity);
      // totalPrice += this.priceDefault * this.quantity;
      // this.pricelists = totalPrice;
    })

    //this.totalPrice += this.priceDefault * this.quantity;
    // this.pricelists = totalPrice;
  }

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

}
