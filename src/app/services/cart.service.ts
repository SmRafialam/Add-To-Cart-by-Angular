import { Injectable, Input } from '@angular/core';
import { BehaviorSubject,Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList: any[] = [];
  private cartData = new BehaviorSubject<any>([]);
  //defaultPrice: number = 100;
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
    let cart =  this.getCartData();
    console.log(cart);

    // const ls =  localStorage.getItem(JSON.parse('cartData'));
    // console.log(ls);
    // let exist:any;

    // if(exist){
    //   exist.qty++;
    //   localStorage.setItem('cartData', JSON.stringify(ls));
    // }else{
    //   if(ls){
    //     const newData = [...ls,product];
    //     localStorage.setItem('cart', JSON.stringify(newData));
    //     this.cartData.next(localStorage.getItem(JSON.parse('cart')));
    //   }
    // }
  }

  getCartData(){
    localStorage.getItem(JSON.parse('cartData'));
  }

  getTotalPrice():any{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
}
