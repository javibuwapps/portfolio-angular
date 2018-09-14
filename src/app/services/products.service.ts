import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  productsFiltered: Product[] = [];
  loading = true ;

  constructor(private http: HttpClient) {

      this.loadProduct();

  }

  // will load the products from the firebase database through http
  private loadProduct() {

    // we return a promise
    return new Promise( (resolve, reject) => {

      this.http.get('https://angular-html-2eae1.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Product[] ) => {

            this.products = resp;

            // finished loading
            this.loading = false ;

            // console.log(this.products);

            // the promise finished
            resolve();

        });

    });


  }

  // get product data by its id
  getProducto(id: string) {

    return this.http.get(`https://angular-html-2eae1.firebaseio.com/productos/${id}.json`);

  }

  // search for product
  searchProduct(name: string) {

    // we execute the filter if we know that the products are loaded

    // the products are not yet loaded ( we they have finished loading )
    if ( this.products.length === 0 ) {

        // we have to load the products
        // this receives a promise
        this.loadProduct().then( () => {

            // execute once we have the products
            // apply filter
            this.filterProducts(name);

        });

    } else {

        // apply filter on products ( search )
        this.filterProducts(name);


    }


  }

  // filter products
  private filterProducts(name: string) {

    /*
    this.productsFiltered =  this.products.filter( product => {

      return true;

    });
    */

    // console.log( this.productsFiltered );

    this.productsFiltered = [];

    // iterate through the products
    this.products.forEach( prod => {

        // to lowercase ( case insesitive )
        name = name.toLowerCase();

        const tituloLower = prod.titulo.toLowerCase();

        // we search in the category or title
        if ( (prod.categoria.indexOf( name ) >= 0) || (tituloLower.indexOf( name ) >= 0) ) {

          // insert the product into the filtered products
          this.productsFiltered.push( prod );

        }


    });



  }


}
