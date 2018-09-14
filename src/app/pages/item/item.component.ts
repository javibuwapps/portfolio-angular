import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDescription } from '../../interfaces/product-description';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductDescription ;
  productId: string ;


  constructor(private route: ActivatedRoute,
              public productsService: ProductsService) {
   }

  ngOnInit() {

      this.route.params
         .subscribe( params => {

              // console.log( params['id'] );
              this.productsService.getProducto( params['id'] )
                .subscribe( (product: ProductDescription) => {

                    // product id
                    this.productId = params['id'] ;

                    // console.log( product );
                    this.product = product ;

                });


         });

  }

}
