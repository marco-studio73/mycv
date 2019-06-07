import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from './layout/layout.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationsComponent } from './formations/formations.component';
import { ProductionsComponent } from './productions/productions.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MotivationComponent } from './motivation/motivation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillsService } from './shared/skills.service';
import { SkillDialogComponent } from './skills/skill-dialog/skill-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent,
    ExperiencesComponent,
    SkillsComponent,
    FormationsComponent,
    ProductionsComponent,
    AboutMeComponent,
    MotivationComponent,
    SkillDialogComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SkillsService],
  entryComponents:[SkillDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
