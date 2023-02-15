import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http: HttpClient) {

  }

  getProduct(): Observable<any>{
    const url = 'https://shopketo.marketvision.com/wp-json/wp/pruvitnow/products/lang';
    return this.http.get(url);
  }


}
