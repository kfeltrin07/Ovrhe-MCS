import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VrsteRadnji, CRUDAction } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { CreateVrsteRadnjiComponent } from '../create-vrste-radnji/create-vrste-radnji.component';

@Component({
  selector: 'app-edit-vrste-radnji',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatRadioModule,
    MatAutocompleteModule,

    TranslationPipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './edit-vrste-radnji.component.html',
  styleUrl: './edit-vrste-radnji.component.scss'
})
export class EditVrsteRadnjiComponent {
public vrsteRadnji: VrsteRadnji = {
    UKUPANBROJSLOGOVA: 0,
    RN: 0,
    SIFVLAS: '',
    IDVRSTARADNJE: '',
    NAZIVVRSTERADNJE: '',
    SISTEMSKAVRSTA: '',
    AKTIVNOST: '',
    OPISVRSTERADNJE: '',
    IDTVRTKE: '',
    IDKORISNIKA: '',
    SYSDATETIME: ''
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public receivedVrsteRadnji: VrsteRadnji,
    private dialogRef: MatDialogRef<CreateVrsteRadnjiComponent>,
    private http: HttpClient,
    public globalVar: GlobalVariablesService,
    public globalFn: GlobalFunctionsService,
    public t: TranslationService,
    public session: SessionService
  ) { }

  public ngOnInit(): void { 
    this.vrsteRadnji = this.receivedVrsteRadnji;
  }

  public validateForm(vrsteRadnji: VrsteRadnji): boolean {
    if (vrsteRadnji.IDVRSTARADNJE != '' && vrsteRadnji.NAZIVVRSTERADNJE != '') {
      return false;
    } else {
      return true;
    }
  }

  public save(): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'Ovrhe',
        method: 'updateOVR_VrsteRadnji',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pAkcija: CRUDAction.Update,
          pIdVrstaRadnje: this.vrsteRadnji.IDVRSTARADNJE,
          pNazivVrsteRadnje: this.vrsteRadnji.NAZIVVRSTERADNJE,
          pOpisVrsteRadnje: this.vrsteRadnji.OPISVRSTERADNJE,
          pSistemskaVrsta: this.vrsteRadnji.SISTEMSKAVRSTA,
          pIdTvrtke: this.vrsteRadnji.IDTVRTKE,
          pAktivnost: this.vrsteRadnji.AKTIVNOST,
        }
      }
    ).subscribe((response: any) => {
      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
    });

    this.dialogRef.close();

  }
}
