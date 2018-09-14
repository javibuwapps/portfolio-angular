import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  constructor(private route: ActivatedRoute,
              public  _productsService: ProductsService) { }

  ngOnInit() {

    this.route.params
         .subscribe( params => {

              // console.log( params['term'] );

              this._productsService.searchProduct( params['term'] );


         });
  }

}
