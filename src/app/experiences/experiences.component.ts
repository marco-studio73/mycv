import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';
import { ExperiencesService } from '../shared/services/experiences.service';
import ExperienceInterface from '../shared/interface/experience.interface';


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  @Input()

  panelOpenState = false;

  experiencesList = [];

  constructor(public dialog: MatDialog, private expService:ExperiencesService) { }

  getAllExperiences(){
    this.expService
    .getAllExperiences()
    .subscribe((data: any) => {
      this.experiencesList = data.experiences;
    });
  }

  openDialogEditExp(exp, id) {
    const dialogConfig =  new MatDialogConfig();
    dialogConfig.data = exp;

    const dialogRef = this.dialog.open(ExperienceDialogComponent,
      dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => {
        this.expService.updateExperience(id, val).subscribe((res:any) => {
          this.experiencesList = res.experiences;
        });
      }
    )
  }

  openDialogAddExp() {

    const dialogConfig =  new MatDialogConfig();

    dialogConfig.data = {};


    const dialogRef = this.dialog.open(ExperienceDialogComponent,
    dialogConfig);

      dialogRef.afterClosed().subscribe(
        val => {
          console.log(val);
          if(val != undefined){
            this.expService.postExperience(val).subscribe((res:any) => {
              this.experiencesList = res.experiences;
            });
          }

        }
      );
  }

  ngOnInit() {

    this.getAllExperiences()

  }

}
