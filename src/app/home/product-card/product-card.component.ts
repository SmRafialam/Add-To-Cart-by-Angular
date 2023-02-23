import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  quantity:number=1;
  defaultPrice:number=100;
  info: number[] = [];
  totalPrice: number = 0;

  @Input() item!:any;

  constructor(private api: ApiService, private cart: CartService){

  }

  ngOnInit(): void {
    //console.log(this.item)


    // this.cart.getCartData$().subscribe((res)=>{
    //   this.cart.setCartData(res);
    // })
  }

  saveInCart(item: any){

    // this.cart.addToCart(item);
    // console.log(item);

    let cartProductData = {
      'id': item.ID,
      'title': item.post_title,
      'image':item.post_thumb_url,
      'quantity': this.quantity,
      'price':this.defaultPrice * this.quantity
    };
    //console.log(data);

    // localStorage.setItem('cartData', JSON.stringify(cartProductData));
    // console.log(localStorage.getItem('cartData'))

    this.cart.addToCart(cartProductData);
  }

  onSelectProduct(item:any){
    // this.cart.addToCart(item);
    console.log(item);
  }

  i=1;
  plus(){
    if(this.i != 20){
      this.i ++;
      this.quantity = this.i;
      this.totalPrice +=  this.defaultPrice * this.quantity;
      console.log(this.quantity,this.totalPrice);
    }
  }

  minus(){
    // alert("ok");
    if(this.i != 1)
    this.i --;
    this.quantity = this.i;
    this.totalPrice -= this.defaultPrice * this.quantity;
    console.log(this.quantity,this.totalPrice);
  }

}
