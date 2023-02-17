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

  @Input() item!:any;

  constructor(private api: ApiService, private cart: CartService){

  }

  ngOnInit(): void {
    console.log(this.item)
  }

  addToCart(item: any){
    this.cart.addToCart(item);
    console.log(item);

    let data = {
      'id': item.ID,
      'quantity': this.quantity,
      'price':this.defaultPrice
    };
    console.log(data);

    localStorage.setItem('cartData', JSON.stringify(data));
    console.log(localStorage.getItem('cartData'))
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
    }
  }

  minus(){
    // alert("ok");
    if(this.i != 1)
    this.i --;
    this.quantity = this.i;
  }

}
