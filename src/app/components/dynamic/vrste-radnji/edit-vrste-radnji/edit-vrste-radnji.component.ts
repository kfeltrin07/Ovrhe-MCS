import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CRUDAction, Tvrtke, VrsteRadnji } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { CreateVrsteRadnjiComponent } from '../create-vrste-radnji/create-vrste-radnji.component';
import { PickTvrtkeComponent } from 'src/app/components/pickers/pick-tvrtke/pick-tvrtke.component';

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
    FormsModule,
    CdkDrag,
    CdkDragHandle
  ],
  templateUrl: './edit-vrste-radnji.component.html',
  styleUrl: './edit-vrste-radnji.component.scss'
})
export class EditVrsteRadnjiComponent implements OnInit {
  public varNames: any = {
    IDTVRTKE: "",
  };
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

  public TvrtkeDropdownIndex: number = -1;
  public offeredTvrtke: Tvrtke[] = [];
  public filteredTvrtke: Tvrtke[] = [];
  public selectedTvrtke: Tvrtke = {
    UKUPANBROJSLOGOVA: 0,
    RN: 0,
    SIFVLAS: "",
    IDTVRTKE: "",
    NAZIVTVRTKE: "",
    ADRESATVRTKE: "",
    AKTIVNOST: "",
    BAZAERP: "",
    BAZALOCAL: "",
    CONNSTRINGERP: "",
    CONNSTRINGLOCAL: "",
    BROJNEPLACENIHRACUNA: "",
    OIBTVRTKE: "",
    MATICNIBROJTVRTKE: "",
    PREDLOZAKOVRHE: "",
    NAZIVTVRTKEOVRSITELJA: "",
    ADRESATVRTKEOVRSITELJA: "",
    IBANTVRTKEOVRSITELJA: "",
    KONTOUPLATE: "",
    PNBPREFIXPRAVNEOSOBE: "",
    PNBPREFIXFIZICKEOSOBE: "",
    IBANKARTICA: "",
    IDKORISNIKA: "",
    SYSDATETIME: "",
  };


  constructor(
    @Inject(MAT_DIALOG_DATA) public receivedVrsteRadnji: VrsteRadnji,
    private dialogRef: MatDialogRef<CreateVrsteRadnjiComponent>,
    private http: HttpClient,
    public globalVar: GlobalVariablesService,
    public globalFn: GlobalFunctionsService,
    public t: TranslationService,
    public session: SessionService,
    public dialog:MatDialog
  ) { }

  public ngOnInit(): void {
    this.vrsteRadnji = this.receivedVrsteRadnji;
    this.OfferedTvrtke();
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

  //TVRTKE START
  public pickTvrtke(): void {
    const dialogRef = this.dialog.open(PickTvrtkeComponent, {});

    dialogRef.afterClosed().subscribe((Tvrtke?: Tvrtke) => {
      this.setTvrtkeFromDialog(Tvrtke);
    });
  }

  public setTvrtkeFromDialog(Tvrtke?: Tvrtke): void {
    if (Tvrtke) {
      this.vrsteRadnji.IDTVRTKE = Tvrtke.IDTVRTKE;
      this.varNames.NAZIVTVRTKE = Tvrtke.NAZIVTVRTKE;
    }
  }

  public removeTvrtke(e: Event): void {
    e.preventDefault();
    this.vrsteRadnji.IDTVRTKE = "";
    this.varNames.NAZIVTVRTKE = "";
  }

  public refreshTvrtke(searchParam: string, isSelected: boolean): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'Ovrhe',
        method: 'getOVR_Tvrtke',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pDioNaziva: '%' + searchParam + '%',
          limit: 100,
          page: 1,
          sort: [
            {
              property: "IDTVRTKE",
              direction: "ASC"
            }
          ]
        }
      }
    ).subscribe((response: any) => {

      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
      this.offeredTvrtke = response.debugData.data;
      this.filteredTvrtke = response.debugData.data;
      var dummyEl = document.getElementById('offeredTvrtke-help-span');
      var isFocused = (document.activeElement === dummyEl);
      if (!isSelected && isFocused) {
        document.getElementById("offeredTvrtke-dropdown")?.classList.add("select-dropdown-content-visible");
      }
    });
  }

  public OfferedTvrtke(): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'Ovrhe',
        method: 'getOVR_Tvrtke',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pDioNaziva: this.vrsteRadnji.IDTVRTKE,
          limit: 100,
          page: 1,
          sort: [
            {
              property: "IDTVRTKE",
              direction: "ASC"
            }
          ]
        }
      }
    ).subscribe((response: any) => {

      const { metadata, data } = response.debugData;
      this.globalFn.showSnackbarError(metadata.OPIS);
      this.offeredTvrtke = data;

      const matchedItem = this.offeredTvrtke.find(item => item.IDTVRTKE.toUpperCase() === this.vrsteRadnji.IDTVRTKE.toUpperCase());
      if (matchedItem) {
        this.vrsteRadnji.IDTVRTKE = matchedItem.IDTVRTKE;
        this.varNames.NAZIVTVRTKE = matchedItem.NAZIVTVRTKE;
      }
    });
  }

  public filterTvrtke(text: string): void {
    if (!text) {
      this.refreshTvrtke("", false);
      return;
    }

    this.offeredTvrtke = this.filteredTvrtke.filter(
      item => item?.IDTVRTKE.toLowerCase().includes(text.toLowerCase())
    );

    if (this.offeredTvrtke.length == 0) {
      this.refreshTvrtke(text, false);
    }
  }

  public selectTvrtke(Tvrtke: Tvrtke): void {
    this.vrsteRadnji.IDTVRTKE = Tvrtke.IDTVRTKE;
    this.varNames.NAZIVTVRTKE = Tvrtke.NAZIVTVRTKE;
    document.getElementById("offeredTvrtke-dropdown")?.classList.remove("select-dropdown-content-visible");
    this.TvrtkeDropdownIndex = -1;
  }

  public resetTvrtkeIndex(): void {
    this.TvrtkeDropdownIndex = -1;
    document.getElementById("offeredTvrtke-dropdown")?.classList.remove("select-dropdown-content-visible");
  }
  //TVRTKE END
}
