import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private productData = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) {

  }

  getProduct(): Observable<any>{
    const url = 'https://shopketo.marketvision.com/wp-json/wp/pruvitnow/products/lang';
    return this.http.get(url);
  }


  setProductData(products:any){
    this.productData.next(products);
  }

  get ProductData$(){
    return this.productData;
  }


}
