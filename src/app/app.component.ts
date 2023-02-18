import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private api: ApiService, private http: HttpClient){

  }

  ngOnInit(): void {
    console.log("app loaded.....");
    // this.http.get('https://shopketo.marketvision.com/wp-json/wp/pruvitnow/products/lang');

   this.api.getProduct().subscribe((data:any)=>{
      this.api.setProductData(data.list);
    });


  }




}
