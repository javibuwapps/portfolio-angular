import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoPageService: InfoPageService,
              private router: Router) { }

  ngOnInit() {
  }


  // search for products
  searchProduct(name: String) {

      // check for length > 1
      if ( name.length < 1 ) {
        return;
      }

      // console.log( name );
      this.router.navigate(['/search', name]);

  }


}
