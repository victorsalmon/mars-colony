import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job'; // GET
import { RegisterService } from '../../services/register.service';

import { Colonist } from '../../models/colonist'; // POST
import { ColonistService } from '../../services/colonist.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [RegisterService, ColonistService]
})
export class RegisterComponent implements OnInit {
  public listJobs: Job [] = [];
  public colonist: Colonist;
  public registerForm: FormGroup;

  constructor(private registerService: RegisterService,
              private colonistService: ColonistService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [
          Validators.required,
          Validators.maxLength(35), 
          Validators.minLength(2)]),
      age: new FormControl('', [
          Validators.required,
          Validators.maxLength(2)]),
      job_id: new FormControl('', [])
    });

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
            localStorage.setItem('colonistIdNum', (newColonist.colonist.id).toString());
            console.log(localStorage.getItem('colonistIdNum'));
        });
  }
  
}
