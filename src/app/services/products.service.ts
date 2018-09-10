import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  loading = true ;

  constructor(private http: HttpClient) {

      this.loadProduct();

  }

  // will load the products from the firebase database through http
  private loadProduct() {

    this.http.get('https://angular-html-2eae1.firebaseio.com/productos_idx.json')
      .subscribe( (resp: Product[] ) => {

          this.products = resp;

          // finished loading
          this.loading = false ;

          // console.log(this.products);

      });

  }

}
