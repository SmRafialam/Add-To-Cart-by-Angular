import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  totalItem: number = 0;


  constructor(
    private api: ApiService,
    private cartService: CartService
  ){

  }

  ngOnInit(): void {
    this.cartService.getCartData$().subscribe((res)=>{
      this.totalItem = res.length;
    })
  }

}
