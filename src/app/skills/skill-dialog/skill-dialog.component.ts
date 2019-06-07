import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import SkillInterface from 'src/app/shared/interface/skill.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.scss']
})
export class SkillDialogComponent implements OnInit {

  form: FormGroup;

  title: String;
  content: String;
  value: Number;
  type: String;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {title, content, value, type}:SkillInterface
  ) {

    this.title = title;
    this.content = content;
    this.value = value;
    this.type = type;


    this.form = fb.group({
        title: [title, Validators.required],
        content: [content],
        value: [value, Validators.required],
        type: [type, Validators.required]
    });

  }

   save() {
    this.dialogRef.close(this.form.value);
    console.log(this.form)
  };

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
