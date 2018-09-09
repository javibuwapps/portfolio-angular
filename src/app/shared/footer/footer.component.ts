import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: Number = new Date().getFullYear();

  constructor(public _infoPageService: InfoPageService) { }

  ngOnInit() {
  }

}
