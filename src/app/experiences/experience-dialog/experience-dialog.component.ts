import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ExperienceInterface from 'src/app/shared/interface/experience.interface';

export const DateFormat = {
  parse: {
  dateInput: 'input',
  },
 display: {
 dateInput: 'MM/DD/YYYY',
 monthYearLabel: 'MMMM YYYY',
 dateA11yLabel: 'MM/DD/YYYY',
 monthYearA11yLabel: 'MMMM YYYY',
 }
 };


@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.scss'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: MAT_DATE_FORMATS, useValue: DateFormat},

  ],
})
export class ExperienceDialogComponent implements OnInit {

  ExperienceForm: FormGroup;
  
  title: String;
  content: String;
  poste: String;
  beginDate: Date;
  endDate: Date;

  constructor(
    private _adapter:DateAdapter<any>,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {title, poste, beginDate, endDate, content}:ExperienceInterface
  ) { 

    this._adapter.setLocale('fr');

    this.title = title;
    this.poste = poste;
    this.content = content;
    this.beginDate = beginDate;
    this.endDate = endDate

    this.ExperienceForm = fb.group({
      title: [title, Validators.required],
      content: [content],
      beginDate: [beginDate, Validators.required],
      endDate: [endDate, Validators.required],
      poste: [poste, Validators.required]
  });

  };

  save() {
    this.dialogRef.close(this.ExperienceForm.value);
  };

  close() {
    this.dialogRef.close();
  }



  ngOnInit() {
  }

}
