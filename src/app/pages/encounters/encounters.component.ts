import { Component, OnInit } from '@angular/core';
import { Encounter } from '../../models/encounter';
import { EncountersService } from '../../services/encounters.service';
// List of Encounters

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {
  public listEncounters: Encounter [] = [];

  constructor(private encountersService: EncountersService) {

   }

  ngOnInit() { // Document.ready equivalent
  // this.listEncounters.push(Encounter);

  this.encountersService.getData();

  }

  sortList (e) {
    e.preventDefault();
    return ;
  }
}
