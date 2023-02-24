import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'add-to-cart';
  itemInCart!:number;
  //cartItemList:any
  constructor(private api: ApiService, private http: HttpClient,private cartService: CartService){

  }

  ngOnInit(): void {
    console.log("app loaded.....");
    this.getApiProducts();

    //this.cart.getCartData();
    //this.cart.addToCart("");

    this.getCartItems();
  }

  getApiProducts(){
    this.api.getProduct().subscribe((data:any)=>{
      this.api.setProductData(data.list);
    });
  }

  getCartItems() {
    const localCartData = localStorage.getItem('cartData');
    if(localCartData !== null) {
      this.cartService.setCartData(JSON.parse(localCartData));
    }
  }

}

