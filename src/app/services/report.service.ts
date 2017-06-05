import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Report } from '../models/report';

@Injectable()
export class ReportService {

  private URL_REPORT = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor(private http: Http) { }

  postData(encounter: Report) {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers });
    return this.http.post(this.URL_REPORT, { encounter }, options)
      .map(this.extractData);
  }

  extractData(res: Response) {
    const report = res.json();
    return report;
  }
}
