import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CRUDAction, VrsteRadnji } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-delete-vrste-radnji',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule,
    MatButtonModule,

    TranslationPipe,
    CommonModule,
    FormsModule
  ],
  templateUrl: './delete-vrste-radnji.component.html',
  styleUrl: './delete-vrste-radnji.component.scss'
})
export class DeleteVrsteRadnjiComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public vrsteRadnji: VrsteRadnji,
    private http: HttpClient,
    private globalVar: GlobalVariablesService,
    private globalFn: GlobalFunctionsService,
    private t: TranslationService,
    private session: SessionService
  ) { }

  public delete(): void {

    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'Ovrhe',
        method: 'updateOVR_VrsteRadnji',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pAkcija: CRUDAction.Delete,
          pIdVrstaRadnje: this.vrsteRadnji.IDVRSTARADNJE,
        }
      }
    ).subscribe((response: any) => {
      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
    });

  }
}
