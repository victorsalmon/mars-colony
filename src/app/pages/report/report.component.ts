import { Component, OnInit } from '@angular/core';
import { Alien } from '../../models/alien';
import { RegisterService } from '../../services/register.service';
//Report an Encounter

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
