import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PickKontoComponent } from 'src/app/components/pickers/pick-konto/pick-konto.component';
import { PickTvrtkeComponent } from 'src/app/components/pickers/pick-tvrtke/pick-tvrtke.component';
import { ChartOfAccounts, CRUDAction, TipOvrhe, Tvrtke } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-create-tip-ovrhe',
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
  templateUrl: './create-tip-ovrhe.component.html',
  styleUrl: './create-tip-ovrhe.component.scss'
})
export class CreateTipOvrheComponent {
  public varNames: any = {
    KONTO: "",
    PROTUKONTO: "",
  };

  public tipOvrhe: TipOvrhe = {
    UKUPANBROJSLOGOVA: 0,
    RN: 0,
    SIFVLAS: "",
    IDTIPOVRHE: "",
    NAZIVTIPAOVRHE: "",
    OZNAKATIPAOVRHE: "",
    IDTVRTKE: "",
    PREFIXPNB: "",
    KONTO: "",
    PROTUKONTO: "",
    TIPDOKUMENTAERP: "",
    IDKORISNIKA: "",
    SYSDATETIME: "",
  };

  public KontoDropdownIndex: number = -1;
  public ProtuKontoDropdownIndex: number = -1;
  public offeredKonto: ChartOfAccounts[] = [];
  public offeredProtuKonto: ChartOfAccounts[] = [];
  public filteredKonto: ChartOfAccounts[] = [];
  public filteredProtuKonto: ChartOfAccounts[] = [];
  public selectedkonto: ChartOfAccounts = {
    UKUPANBROJSLOGOVA: 0,
    RN: 0,
    SIFKONTO: "",
    NAZKONTO: "",
    INDSC: "",
    INDBIL: "",
    INDDEVIZNI: "",
    INDPRIHILIRAS: "",
    INDZAP: "",
    INDOJ: "",
    SIFKONTO2: "",
    NAZKONTO2: "",
    INDUFINSUM: "",
    PLAN_DATUM: "",
    PLAN_IZNOS: "",
    IZMJENA1_DATUM: "",
    IZMJENA1_IZNOS: "",
    IZMJENA2_DATUM: "",
    IZMJENA2_IZNOS: "",
    IDKORISNIKA: "",
    SYSDATETIME: ""
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
    private dialogRef: MatDialogRef<CreateTipOvrheComponent>,
    private http: HttpClient,
    public globalVar: GlobalVariablesService,
    public globalFn: GlobalFunctionsService,
    public t: TranslationService,
    public session: SessionService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void { }

  public validateForm(tipOvrhe: TipOvrhe): boolean {
    if (tipOvrhe.IDTIPOVRHE != '' && tipOvrhe.NAZIVTIPAOVRHE != '') {
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
        method: 'updateOVR_TipOvrhe',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pAkcija: CRUDAction.Insert,
          pIdTipOvrhe: this.tipOvrhe.IDTIPOVRHE,
          pNazivTipOvrhe: this.tipOvrhe.NAZIVTIPAOVRHE,
          pOznakaTipaOvrhe: this.tipOvrhe.OZNAKATIPAOVRHE,
          pIdTvrtke: this.tipOvrhe.IDTVRTKE,
          pPrefixPnb: this.tipOvrhe.PREFIXPNB,
          pKonto: this.tipOvrhe.KONTO,
          pProtuKonto: this.tipOvrhe.PROTUKONTO,
          pTipDokumentaErp: this.tipOvrhe.TIPDOKUMENTAERP,
        }
      }
    ).subscribe((response: any) => {
      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
    });

    this.dialogRef.close();

  }


  //KONTO START
  public pickKonto(): void {
    const dialogRef = this.dialog.open(PickKontoComponent, {});

    dialogRef.afterClosed().subscribe((ChartOfAccounts?: ChartOfAccounts) => {
      this.setKontoFromDialog(ChartOfAccounts);
    });
  }

  public setKontoFromDialog(ChartOfAccounts?: ChartOfAccounts): void {
    if (ChartOfAccounts) {
      this.tipOvrhe.KONTO = ChartOfAccounts.SIFKONTO;
      this.varNames.NAZKONTO = ChartOfAccounts.NAZKONTO;
    }
  }

  public removeKonto(e: Event): void {
    e.preventDefault();
    this.tipOvrhe.KONTO = "";
    this.varNames.NAZKONTO = "";
  }

  public refreshKonto(searchParam: string, isSelected: boolean): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'w3app',
        method: 'getKonto',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pDioNaziva: '%' + searchParam + '%',
          limit: 100,
          page: 1,
          sort: [
            {
              property: "SIFKONTO",
              direction: "ASC"
            }
          ]
        }
      }
    ).subscribe((response: any) => {

      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
      this.offeredKonto = response.debugData.data;
      this.filteredKonto = response.debugData.data;
      var dummyEl = document.getElementById('offeredKonto-help-span');
      var isFocused = (document.activeElement === dummyEl);
      if (!isSelected && isFocused) {
        document.getElementById("offeredKonto-dropdown")?.classList.add("select-dropdown-content-visible");
      }
    });
  }

  public OfferedKonto(): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'w3app',
        method: 'getKonto',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pDioNaziva: this.tipOvrhe.KONTO,
          limit: 100,
          page: 1,
          sort: [
            {
              property: "SIFKONTO",
              direction: "ASC"
            }
          ]
        }
      }
    ).subscribe((response: any) => {

      const { metadata, data } = response.debugData;
      this.globalFn.showSnackbarError(metadata.OPIS);
      this.offeredKonto = data;

      const matchedItem = this.offeredKonto.find(item => item.SIFKONTO.toUpperCase() === this.tipOvrhe.KONTO.toUpperCase());
      if (matchedItem) {
        this.tipOvrhe.KONTO = matchedItem.SIFKONTO;
        this.varNames.NAZKONTO = matchedItem.NAZKONTO;
      }
    });
  }

  public filterKonto(text: string): void {
    if (!text) {
      this.refreshKonto("", false);
      return;
    }

    this.offeredKonto = this.filteredKonto.filter(
      item => item?.SIFKONTO.toLowerCase().includes(text.toLowerCase())
    );

    if (this.offeredKonto.length == 0) {
      this.refreshKonto(text, false);
    }
  }

  public selectKonto(ChartOfAccounts: ChartOfAccounts): void {
    this.tipOvrhe.KONTO = ChartOfAccounts.SIFKONTO;
    this.varNames.NAZKONTO = ChartOfAccounts.NAZKONTO;
    document.getElementById("offeredKonto-dropdown")?.classList.remove("select-dropdown-content-visible");
    this.KontoDropdownIndex = -1;
  }

  public resetKontoIndex(): void {
    this.KontoDropdownIndex = -1;
    document.getElementById("offeredKonto-dropdown")?.classList.remove("select-dropdown-content-visible");
  }
  //KONTO END


  //KONTO START
  public pickProtuKonto(): void {
    const dialogRef = this.dialog.open(PickKontoComponent, {});

    dialogRef.afterClosed().subscribe((ChartOfAccounts?: ChartOfAccounts) => {
      this.setProtuKontoFromDialog(ChartOfAccounts);
    });
  }

  public setProtuKontoFromDialog(ChartOfAccounts?: ChartOfAccounts): void {
    if (ChartOfAccounts) {
      this.tipOvrhe.PROTUKONTO = ChartOfAccounts.SIFKONTO;
      this.varNames.PROTUNAZKONTO = ChartOfAccounts.NAZKONTO;
    }
  }

  public removeProtuKonto(e: Event): void {
    e.preventDefault();
    this.tipOvrhe.PROTUKONTO = "";
    this.varNames.PROTUNAZKONTO = "";
  }

  public refreshProtuKonto(searchParam: string, isSelected: boolean): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'w3app',
        method: 'getKonto',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pDioNaziva: '%' + searchParam + '%',
          limit: 100,
          page: 1,
          sort: [
            {
              property: "SIFKONTO",
              direction: "ASC"
            }
          ]
        }
      }
    ).subscribe((response: any) => {

      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
      this.offeredProtuKonto = response.debugData.data;
      this.filteredProtuKonto = response.debugData.data;
      var dummyEl = document.getElementById('offeredProtuKonto-help-span');
      var isFocused = (document.activeElement === dummyEl);
      if (!isSelected && isFocused) {
        document.getElementById("offeredProtuKonto-dropdown")?.classList.add("select-dropdown-content-visible");
      }
    });
  }

  public OfferedProtuKonto(): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'w3app',
        method: 'getKonto',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pDioNaziva: this.tipOvrhe.PROTUKONTO,
          limit: 100,
          page: 1,
          sort: [
            {
              property: "SIFKONTO",
              direction: "ASC"
            }
          ]
        }
      }
    ).subscribe((response: any) => {

      const { metadata, data } = response.debugData;
      this.globalFn.showSnackbarError(metadata.OPIS);
      this.offeredProtuKonto = data;

      const matchedItem = this.offeredProtuKonto.find(item => item.SIFKONTO.toUpperCase() === this.tipOvrhe.PROTUKONTO.toUpperCase());
      if (matchedItem) {
        this.tipOvrhe.PROTUKONTO = matchedItem.SIFKONTO;
        this.varNames.PROTUNAZKONTO = matchedItem.NAZKONTO;
      }
    });
  }

  public filterProtuKonto(text: string): void {
    if (!text) {
      this.refreshKonto("", false);
      return;
    }

    this.offeredProtuKonto = this.filteredProtuKonto.filter(
      item => item?.SIFKONTO.toLowerCase().includes(text.toLowerCase())
    );

    if (this.offeredProtuKonto.length == 0) {
      this.refreshKonto(text, false);
    }
  }

  public selectProtuKonto(ChartOfAccounts: ChartOfAccounts): void {
    this.tipOvrhe.PROTUKONTO = ChartOfAccounts.SIFKONTO;
    this.varNames.PROTUNAZKONTO = ChartOfAccounts.NAZKONTO;
    document.getElementById("offeredProtuKonto-dropdown")?.classList.remove("select-dropdown-content-visible");
    this.ProtuKontoDropdownIndex = -1;
  }

  public resetProtuKontoIndex(): void {
    this.ProtuKontoDropdownIndex = -1;
    document.getElementById("offeredProtuKonto-dropdown")?.classList.remove("select-dropdown-content-visible");
  }
  //KONTO END

  //TVRTKE START
  public pickTvrtke(): void {
    const dialogRef = this.dialog.open(PickTvrtkeComponent, {});

    dialogRef.afterClosed().subscribe((Tvrtke?: Tvrtke) => {
      this.setTvrtkeFromDialog(Tvrtke);
    });
  }

  public setTvrtkeFromDialog(Tvrtke?: Tvrtke): void {
    if (Tvrtke) {
      this.tipOvrhe.IDTVRTKE = Tvrtke.IDTVRTKE;
      this.varNames.NAZIVTVRTKE = Tvrtke.NAZIVTVRTKE;
    }
  }

  public removeTvrtke(e: Event): void {
    e.preventDefault();
    this.tipOvrhe.IDTVRTKE = "";
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
          pDioNaziva: this.tipOvrhe.IDTVRTKE,
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

      const matchedItem = this.offeredTvrtke.find(item => item.IDTVRTKE.toUpperCase() === this.tipOvrhe.IDTVRTKE.toUpperCase());
      if (matchedItem) {
        this.tipOvrhe.IDTVRTKE = matchedItem.IDTVRTKE;
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
    this.tipOvrhe.IDTVRTKE = Tvrtke.IDTVRTKE;
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
