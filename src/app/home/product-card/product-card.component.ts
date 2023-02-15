import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() item:any;

  constructor(private api: ApiService, private cart: CartService){

  }

  addToCart(item: any){

    this.cart.addToCart(item);
    console.log(item);

    let data = {
      'id': item.ID,
      'quantity': item.quantity
    };
    console.log(data);

    localStorage.setItem('cartData', JSON.stringify(data));
    console.log(localStorage.getItem('cartData'))

  }

}
