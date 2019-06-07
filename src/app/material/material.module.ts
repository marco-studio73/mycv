import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatMenuModule, MatFormFieldModule, MatInputModule, MatCardModule, MatDividerModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSliderModule, MatDialogModule, MatOptionModule, MatSelectModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule

  ],
  exports: [
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSliderModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }