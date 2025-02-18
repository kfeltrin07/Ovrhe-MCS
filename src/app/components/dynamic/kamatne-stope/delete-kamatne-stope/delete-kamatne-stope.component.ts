import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CRUDAction, KamatneStope } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-delete-kamatne-stope',
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
  templateUrl: './delete-kamatne-stope.component.html',
  styleUrl: './delete-kamatne-stope.component.scss'
})
export class DeleteKamatneStopeComponent {
constructor(
    @Inject(MAT_DIALOG_DATA) public kamatneStope: KamatneStope,
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
        method: 'updateOVR_KamatneStope',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pAkcija: CRUDAction.Delete,
          pIdStatusa: this.kamatneStope.IDKAMATNESTOPE,
        }
      }
    ).subscribe((response: any) => {
      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
    });

  }
}
