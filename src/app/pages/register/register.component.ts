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
  private NO_JOB_SELECTED = false;

  constructor(
      private registerService: RegisterService,
      private colonistService: ColonistService,
      private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      colName: new FormControl('', [
          Validators.required,
          Validators.maxLength(35),
          Validators.minLength(2)]),
      colAge: new FormControl('', [
          Validators.required,
          Validators.maxLength(2)]),
      colJob: new FormControl(this.NO_JOB_SELECTED, [])
    });

    this.registerService.getData()
        .subscribe((jobs) => {
          this.listJobs = jobs;
    });
  }

  postColonist () {
    const colonist = new Colonist(this.registerForm, '35', '4');
    this.colonistService
        .postData(colonist)
        .subscribe((newColonist) => {
            localStorage.setItem('colonistIdNum', (newColonist.colonist.id).toString());
            console.log(localStorage.getItem('colonistIdNum'));
        });
  }
  
}
