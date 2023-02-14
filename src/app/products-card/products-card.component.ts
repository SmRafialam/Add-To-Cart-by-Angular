import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.css']
})
export class ProductsCardComponent implements OnInit{

  public productLists:any = "";
  public cart:any = "";
  subscription!: Subscription;


  constructor(private api: ApiService){

  }

  ngOnInit(): void {
    this.subscription = this.api.getProduct().subscribe((data:any)=>{
      this.productLists = data.list;
      // console.log(data.list);
      this.cart = data.list.filter((res:any)=>{
        this.cart = res;
        console.log(res);
      })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
