import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CRUDAction, Tvrtke } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-delete-tvrtke',
  standalone: true,
  imports: [
    MatIconModule,
    MatDialogModule,
    MatButtonModule,

    TranslationPipe,
    CommonModule,
    FormsModule,
    CdkDrag,
    CdkDragHandle
  ],
  templateUrl: './delete-tvrtke.component.html',
  styleUrl: './delete-tvrtke.component.scss'
})
export class DeleteTvrtkeComponent {
 constructor(
    @Inject(MAT_DIALOG_DATA) public tvrtke: Tvrtke,
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
        method: 'updateOVR_Tvrtke',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pAkcija: CRUDAction.Delete,
          pIdTvrtke: this.tvrtke.IDTVRTKE,
        }
      }
    ).subscribe((response: any) => {
      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
    });

  }
}
