import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //new BehaviorSubject<string>('');
  private cartData = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {

  }

  getProduct(): Observable<any>{
    const url = 'https://shopketo.marketvision.com/wp-json/wp/pruvitnow/products/lang';
    return this.http.get(url);
  }

  setCartData(data:string){
    this.cartData.next(data);
  }

  getCartData(){
    return this.cartData;
  }
}
