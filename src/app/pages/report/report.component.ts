import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien'; // GET
import { AlienService } from '../../services/alien.service';

import { Report } from '../../models/report'; //POST
import { ReportService } from '../../services/report.service';
// Report an Encounter

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AlienService, ReportService]
})
export class ReportComponent implements OnInit {
  public listAliens: Alien [] = [];
  public report: Report;
  constructor(private alienService: AlienService,
              private reportService: ReportService) { }

  ngOnInit() {
    this.alienService.getData()
        .subscribe((aliens) => {
          this.listAliens = aliens;
        });
  }

  postReport (atype, date, action, colonist_id) {
    const report  = new Report(atype, date, action, colonist_id);
    this.reportService
        .postData(report)
        .subscribe((newReport) => {
            console.log(newReport);
        });
  }
}
