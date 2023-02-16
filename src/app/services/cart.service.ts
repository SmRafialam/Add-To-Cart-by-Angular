import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any[] = [];
  private cartData = new BehaviorSubject<any>([]);

  constructor() { }

  setCartData(product:string){
    this.cartItemList.push(...product);
    this.cartData.next(product);
  }

  getCartData(){
    return this.cartData.asObservable();
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    this.cartData.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
  }
}
