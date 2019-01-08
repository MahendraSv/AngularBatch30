import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:3000/products')
      .pipe(map(data => data));
  }

  // saveProduct(product: any) {
  //   return this.http.post('http://localhost:3000/products', product)
  //     .pipe(map(data => data));
  // }

    saveProduct(newProduct: {}): Observable<{}> {
    return this.http.post<{}>('http://localhost:3000/products', newProduct)
      .pipe(map(data => data));
  }

  deleteProduct(id) {
    return this.http.delete('http://localhost:3000/products/' + id)
      .pipe(map(data => data));
  }
}
