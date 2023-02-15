import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() item:any;

  constructor(private api: ApiService){

  }

  saveData(){

    let data = [{
      id: this.api.getProduct(),

      // title: 'keto',
      // Image: './assets/images/img1',
      // price: 20,
      // quantity: 3,
      // totalQuantity: 5
    }];

    localStorage.setItem('cartData', JSON.stringify(data));
    console.log(localStorage.getItem('cartData'))

  }

}
