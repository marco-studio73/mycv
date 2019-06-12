import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';


import { environment } from '../../environments/environment';

import { SkillDialogComponent } from './skill-dialog/skill-dialog.component';
import { SkillsService } from '../shared/services/skills.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input()


  skillsList = [];

  constructor( public dialog: MatDialog, private skillService: SkillsService) { }

  isLocalDev = environment.production;

  getAllSkills() {
    this.skillService
    .getSkills()
    .subscribe((data: any) => {
      this.skillsList = data.skills;
    });
  }

  openDialogAddSkill() {

    const dialogConfig =  new MatDialogConfig();
    dialogConfig.data = {};

    const dialogRef = this.dialog.open(SkillDialogComponent,
    dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => {
        this.skillService.postSkill(val).subscribe((res: any) => {
          this.skillsList = res;
        });
      }
  );
  }

  deleteSkill(id) {
    this.skillService.deleteSkill(id).subscribe((res: any) => {
      this.skillsList = res.skills;
    });
  }

  ngOnInit() {

    this.getAllSkills();

  }

}


