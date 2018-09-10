import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {


  info: InfoPage = {};
  pageLoaded  = false;
  team: any[] = [];          // team info

  constructor(private http: HttpClient) {

     this.loadInfo();
     this.loadTeam();

  }

  // method to load info from the data-page.json file
  private loadInfo(){

    this.http.get('assets/data/data-page.json')
      .subscribe( (resp: InfoPage) => {

          // console.log( resp );

          // propiedad twitter de ese objeto
          // console.log( resp['twitter'] );

          this.pageLoaded = true;
          this.info = resp;

      });

  }

  // loads the Team data from the firebase database
  private loadTeam(){

    this.http.get('https://angular-html-2eae1.firebaseio.com/equipo.json')
      .subscribe( (resp: any[] ) => {

          this.team = resp;
          // console.log(resp);

      });
  }


}
