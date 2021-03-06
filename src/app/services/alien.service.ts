import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Alien } from '../models/alien';

@Injectable()
export class AlienService {
  private URL_ALIENS = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';

  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.URL_ALIENS)
      .map(this.extractAliens);
  }

  extractAliens(res: Response) {
    const aliens = res.json();
    return aliens.aliens;
  }
}
