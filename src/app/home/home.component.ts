import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public productLists:any = "";
  //public cart:any = "";
  subscription!: Subscription;


  constructor(private api: ApiService){

  }

  ngOnInit(): void {
    this.subscription = this.api.getProduct().subscribe((data:any)=>{
      this.productLists = data.list;
      console.log(this.productLists);


      this.productLists.forEach((a:any) => {
        Object.assign(a,{quantity:1 , total:a.price});
      });
    //  data.list.filter((res:any)=>{
    //     this.productLists = res;
    //     //console.log(res);
    //   })
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
