import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien';
import { ReportService } from '../../services/report.service';
// Report an Encounter

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [ReportService]
})
export class ReportComponent implements OnInit {
  public listAliens: Alien [] = [];
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getData()
        .subscribe((aliens) => {
          this.listAliens = aliens;
        });
  }
}
