import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien';
import { AlienService } from '../../services/alien.service';
// Report an Encounter

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AlienService]
})
export class ReportComponent implements OnInit {
  public listAliens: Alien [] = [];
  constructor(private alienService: AlienService) { }

  ngOnInit() {
    this.alienService.getData()
        .subscribe((aliens) => {
          this.listAliens = aliens;
        });
  }
}
