import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
   }

  ngOnInit() {
      console.log(this.route.snapshot.paramMap.get('prod-id'));

  }

}
