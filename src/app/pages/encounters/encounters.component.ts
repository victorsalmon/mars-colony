import { Component, OnInit } from '@angular/core';
// List of Encounters

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss']
})
export class EncountersComponent implements OnInit {
  listEncounters = [];

  constructor() { }

  ngOnInit() { // Document.ready equivalent

  // this.listEncounters.push(Encounter);

  }

  sortList (e) {
    e.preventDefault();
    return ;
  }
}
