import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PickKontoComponent } from 'src/app/components/pickers/pick-konto/pick-konto.component';
import { ChartOfAccounts, CRUDAction, Tvrtke } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { TranslationService } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-edit-tvrtke',
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
  templateUrl: './edit-tvrtke.component.html',
  styleUrl: './edit-tvrtke.component.scss'
})
export class EditTvrtkeComponent implements OnInit {
  public varNames: any = {
    KONTOUPLATE: "",
    PROTUKONTO: "",
  };

  public tvrtke: Tvrtke = {
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
    PREDLOZAKOVRHE:"",
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

    public KontoDropdownIndex: number = -1;
    public offeredKonto: ChartOfAccounts[] = [];
    public filteredKonto: ChartOfAccounts[] = [];
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

  constructor(
    @Inject(MAT_DIALOG_DATA) public receivedTvrtke: Tvrtke,
    private dialogRef: MatDialogRef<EditTvrtkeComponent>,
    private http: HttpClient,
    public globalVar: GlobalVariablesService,
    public globalFn: GlobalFunctionsService,
    public t: TranslationService,
    public session: SessionService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.tvrtke = this.receivedTvrtke;

    this.OfferedKonto();
  }

  public validateForm(tvrtke: Tvrtke): boolean {
    if (tvrtke.IDTVRTKE != '' && tvrtke.NAZIVTVRTKE != '') {
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
        method: 'updateOVR_Tvrtke',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pAkcija: CRUDAction.Update,
          pIdTvrtke: this.tvrtke.IDTVRTKE,
          pNazivTvrtke: this.tvrtke.NAZIVTVRTKE,
          pAdresaTvrtke: this.tvrtke.ADRESATVRTKE,
          pAktivnost: this.tvrtke.AKTIVNOST,
          pBazaErp: this.tvrtke.BAZAERP,
          pBazaLocal: this.tvrtke.BAZALOCAL,
          pConnStringErp: this.tvrtke.CONNSTRINGERP,
          pConnStringLocal: this.tvrtke.CONNSTRINGLOCAL,
          pBrojNeplacenihRacuna: this.tvrtke.BROJNEPLACENIHRACUNA,
          pOibTvrtke: this.tvrtke.OIBTVRTKE,
          pMaticniBrojTvrtke: this.tvrtke.MATICNIBROJTVRTKE,
          pPredlozakOvrhe: this.tvrtke.PREDLOZAKOVRHE,
          pNazivTvrtkeOvrsitelja: this.tvrtke.NAZIVTVRTKEOVRSITELJA,
          pAdresaTvrtkeOvrsitelja: this.tvrtke.ADRESATVRTKEOVRSITELJA,
          pIbanTvrtkeOvrsitelja: this.tvrtke.IBANTVRTKEOVRSITELJA,
          pKontoUplate: this.tvrtke.KONTOUPLATE,
          pPnbPrefixPravneOsobe: this.tvrtke.PNBPREFIXPRAVNEOSOBE,
          pPnbPrefixFizickeOsobe: this.tvrtke.PNBPREFIXFIZICKEOSOBE,
          pIbanKartica: this.tvrtke.IBANKARTICA,
        }
      }
    ).subscribe((response: any) => {
      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
    });

    this.dialogRef.close();

  }

  //KONTOUPLATE START
  public pickKonto(): void {
    const dialogRef = this.dialog.open(PickKontoComponent, {});

    dialogRef.afterClosed().subscribe((ChartOfAccounts?: ChartOfAccounts) => {
      this.setKontoFromDialog(ChartOfAccounts);
    });
  }

  public setKontoFromDialog(ChartOfAccounts?: ChartOfAccounts): void {
    if (ChartOfAccounts) {
      this.tvrtke.KONTOUPLATE = ChartOfAccounts.SIFKONTO;
      this.varNames.NAZKONTOUPLATE = ChartOfAccounts.NAZKONTO;
    }
  }

  public removeKonto(e: Event): void {
    e.preventDefault();
    this.tvrtke.KONTOUPLATE = "";
    this.varNames.NAZKONTOUPLATE = "";
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
          pDioNaziva: this.tvrtke.KONTOUPLATE,
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

      const matchedItem = this.offeredKonto.find(item => item.SIFKONTO.toUpperCase() === this.tvrtke.KONTOUPLATE.toUpperCase());
      if (matchedItem) {
        this.tvrtke.KONTOUPLATE = matchedItem.SIFKONTO;
        this.varNames.NAZKONTOUPLATE = matchedItem.NAZKONTO;
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
    this.tvrtke.KONTOUPLATE = ChartOfAccounts.SIFKONTO;
    this.varNames.NAZKONTOUPLATE = ChartOfAccounts.NAZKONTO;
    document.getElementById("offeredKonto-dropdown")?.classList.remove("select-dropdown-content-visible");
    this.KontoDropdownIndex = -1;
  }

  public resetKontoIndex(): void {
    this.KontoDropdownIndex = -1;
    document.getElementById("offeredKonto-dropdown")?.classList.remove("select-dropdown-content-visible");
  }
  //KONTO END
}
