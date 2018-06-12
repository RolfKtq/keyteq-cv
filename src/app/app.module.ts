import { Logo } from './services/logo';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { Lister } from './services/lister';
import { DataStorageService } from './services/data-storage.service';
import { AuthService } from './signin/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {
  MatSelectModule,
  MatListModule,
  MatTabsModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatGridListModule,
} from '@angular/material';


import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';




import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { BrukereComponent } from './brukere/brukere.component';
import { RollerComponent } from './roller/roller.component';
import { KandidaterComponent } from './kandidater/kandidater.component';
import { StickyElementDirective } from './directives/sticky-element.directive';
import { KandidatComponent } from './kandidater/kandidat/kandidat.component';
import { ImageComponent } from './kandidater/kandidat/image/image.component';
import { UtdanningComponent } from './kandidater/kandidat/utdanning/utdanning.component';
import { KursComponent } from './kandidater/kandidat/kurs/kurs.component';
import { ErfaringComponent } from './kandidater/kandidat/erfaring/erfaring.component';
import { CvUtdanningComponent } from './kandidater/kandidat/utdanning/cv-utdanning/cv-utdanning.component';
import { PdfComponent } from './kandidater/kandidat/pdf/pdf.component';
import { CvKursComponent } from './kandidater/kandidat/kurs/cv-kurs/cv-kurs.component';
import { CvErfaringComponent } from './kandidater/kandidat/erfaring/cv-erfaring/cv-erfaring.component';
import { AttestComponent } from './kandidater/kandidat/attest/attest.component';
import { CvAttestComponent } from './kandidater/kandidat/attest/cv-attest/cv-attest.component';
import { PdfGenerellComponent } from './pdf-generell/pdf-generell.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    BrukereComponent,
    RollerComponent,
    KandidaterComponent,
    StickyElementDirective,
    KandidatComponent,
    ImageComponent,
    UtdanningComponent,
    KursComponent,
    ErfaringComponent,
    CvUtdanningComponent,
    PdfComponent,
    CvKursComponent,
    CvErfaringComponent,
    AttestComponent,
    CvAttestComponent,
    PdfGenerellComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,


    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,

    MatTableModule,


    MatPaginatorModule,
    MatSortModule,

    MatCheckboxModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,

    MatAutocompleteModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatStepperModule,

  ],
  providers: [AuthService , DataStorageService, Logo, Lister, { provide: MAT_DATE_LOCALE, useValue: 'no-NB'}, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
