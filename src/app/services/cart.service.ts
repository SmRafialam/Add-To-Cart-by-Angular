import { Injectable, Input } from '@angular/core';
import { BehaviorSubject,Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList: any[] = [];
  private cartData = new BehaviorSubject<any>([]);
  cart:any;

  constructor() {

   }

  setCartData(product:string){
    this.cartItemList.push(product);
    this.cartData.next(product);

  }

  getCartData$(){
    return this.cartData;
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.cartData.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);


    localStorage.setItem('cartData', JSON.stringify(this.cartItemList));
    let cart = localStorage.getItem(JSON.parse('cartData'));

    console.log(cart);
  }


  getTotalPrice():any{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
}
