import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';


import { environment } from '../../environments/environment';
import SkillInterface from '../shared/interface/skill.interface';
import { SkillDialogComponent } from './skill-dialog/skill-dialog.component';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input()


  developmentSkills: [];
  creationSkills: [];
  otherSkills: [];

  constructor( public dialog: MatDialog) { }

  isLocalDev = environment.production

  openDialogAddSkill() {

    console.log('open');

    const dialogConfig =  new MatDialogConfig();

    dialogConfig.data = {};

    const dialogRef = this.dialog.open(SkillDialogComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => console.log("Dialog output:", val)
  );
  }

  ngOnInit() {

    console.log(this.isLocalDev);

  }

}


