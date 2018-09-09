import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {


  info: InfoPage = {};

  pageLoaded  = false;

  constructor(private http: HttpClient) {

     this.http.get('assets/data/data-page.json')
        .subscribe( (resp: InfoPage) => {

            // console.log( resp );

            // propiedad twitter de ese objeto
            // console.log( resp['twitter'] );

            this.pageLoaded = true;
            this.info = resp;

        });

  }

}
