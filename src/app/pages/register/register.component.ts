import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { RegisterService } from '../../services/register.service';
import { ColonistService } from '../../services/colonist.service';

import { Colonist } from '../../models/colonist'; // POST


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService, ColonistService]
})
export class RegisterComponent implements OnInit {
  public listJobs: Job [] = [];
  public colonist: Colonist [] = [];

  constructor(private registerService: RegisterService, private colonistService: ColonistService) { }

  ngOnInit() {
    this.registerService.getData()
        .subscribe((jobs) => {
          this.listJobs = jobs;
    });
  }

  postColonist () {
    const colonist = new Colonist('Mack', '35', '4');
    this.colonistService
        .postData(colonist)
        .subscribe((newColonist) => {
            console.log(newColonist);
        });
  }

}
