import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Job } from '../models/job';

@Injectable()
export class RegisterService {
  private URL_JOBS = 'https://red-wdp-api.herokuapp.com/api/mars/jobs';

  constructor(private http: Http) { }

  getData() {
    return this.http.get(this.URL_JOBS)
      .map(this.extractJobs);
  }

  extractJobs (res: Response) {
    const jobs = res.json();
    return jobs.jobs;
  }
=======

@Injectable()
export class RegisterService {

  constructor() { }

>>>>>>> 86d1761... created services for register (Job) and report (Alien)
}
