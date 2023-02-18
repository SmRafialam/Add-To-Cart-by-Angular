import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppComponent } from '../app.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

   productLists:any = "";
  //public cart:any = "";
  subscription!: Subscription;


  constructor(private api: ApiService){

  }

  ngOnInit(): void {
   this.api.ProductData$.subscribe((data:any)=>{

    this.productLists = data;
   })

  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
