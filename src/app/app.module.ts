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
import { SkillsService } from './shared/services/skills.service';
import { SkillDialogComponent } from './skills/skill-dialog/skill-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperiencesService } from './shared/services/experiences.service';
import { ExperienceDialogComponent } from './experiences/experience-dialog/experience-dialog.component';

import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgxEditorModule } from 'ngx-editor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


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
    SkillDialogComponent,
    ExperienceDialogComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot(),
    NgxEditorModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [SkillsService, ExperiencesService],
  entryComponents:[SkillDialogComponent, ExperienceDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
