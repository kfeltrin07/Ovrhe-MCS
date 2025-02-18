import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KamatneStope, Sorting } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { PaginationComponent } from '../../elements/pagination/pagination.component';
import { CreateKamatneStopeComponent } from './create-kamatne-stope/create-kamatne-stope.component';
import { DeleteKamatneStopeComponent } from './delete-kamatne-stope/delete-kamatne-stope.component';
import { DetailsKamatneStopeComponent } from './details-kamatne-stope/details-kamatne-stope.component';
import { EditKamatneStopeComponent } from './edit-kamatne-stope/edit-kamatne-stope.component';

@Component({
  selector: 'app-kamatne-stope',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSortModule,
    MatTableModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatLabel,
    MatToolbarModule,
    MatInputModule,

    FormsModule,
    CommonModule,
    TranslationPipe,
    PaginationComponent
  ],
  templateUrl: './kamatne-stope.component.html',
  styleUrl: './kamatne-stope.component.scss'
})
export class KamatneStopeComponent implements OnInit {
  public displayedColumns: string[] = ['IDKAMATNESTOPE', 'IDTIPKAMATNESTOPE', 'DATUMOD','DATUMDO', 'POSTOTAKKAMATA', 'options'];

  public kamatneStope: KamatneStope[] = [];
  public KamatneStope: KamatneStope = {
    UKUPANBROJSLOGOVA: 0,
    RN: 0,
    SIFVLAS: "",
    IDKAMATNESTOPE: "",
    IDTIPKAMATNESTOPE: "",
    DATUMOD: "",
    DATUMDO: "",
    POSTOTAKKAMATA: "",
    IDTVRTKE: "",
    IDKORISNIKA: "",
    SYSDATETIME: "",
  };


  public dataSource = this.kamatneStope;
  public searchParam: string = '';
  public loading: boolean = true;
  public sorting: Sorting = {
    active: 'IDKAMATNESTOPE',
    direction: 'ASC'
  };
  public isPaginatorShown: boolean = true;
  public pageIndex: number = 0;
  public pageSize = 20;
  public pageSizeOptions: number[] = [5, 10, 15, 20];
  public length = 0;

  constructor(
    public http: HttpClient,
    public globalVar: GlobalVariablesService,
    private globalFn: GlobalFunctionsService,
    public session: SessionService,
    public dialog: MatDialog
  ) { }

  public ngOnInit(): void {
    this.getKamatneStope();
  }

  public getKamatneStope(): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'Ovrhe',
        method: 'getOVR_KamatneStope',
        sid: this.session.loggedInUser.sessionID,
        data: {
          pDioNaziva: '%' + this.searchParam + '%',
          limit: this.pageSize,
          page: (this.pageIndex + 1),
          sort: [
            {
              property: this.sorting.active,
              direction: this.sorting.direction
            }
          ]
        }
      }
    ).subscribe((response: any) => {
      this.globalFn.showSnackbarError(response.debugData.metadata.OPIS);
      this.kamatneStope = response.debugData.data;
      this.dataSource = this.kamatneStope;
      this.length = +response.debugData?.data[0]?.UKUPANBROJSLOGOVA?(+response.debugData.data[0].UKUPANBROJSLOGOVA):0;
      this.loading = false;
    });
  }


  public receiveMessage($event: any): void {
    if ($event.description == 'PageEvent') {
      this.pageIndex = $event.value.pageIndex;
      this.pageSize = $event.value.pageSize;
      this.refresh();
    }
  }


  public openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateKamatneStopeComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => this.refresh(), 1000);
    });
  }

  public openDetailsDialog(item: any): void {
    const dialogRef = this.dialog.open(DetailsKamatneStopeComponent, {
      data: item,


    });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  public openEditDialog(item: any): void {
    const dialogRef = this.dialog.open(EditKamatneStopeComponent, {
      data: item
    });
    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => this.refresh(), 1000);
    });
  }

  public openDeleteDialog(item: any): void {
    const dialogRef = this.dialog.open(DeleteKamatneStopeComponent, {
      data: item
    });
    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => this.refresh(), 1000);
    });
  }

  /*
  public openPDFDialog(item: any): void {
    const dialogRef = this.dialog.open(ZaposleniPdfComponent, {
      data: item
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  public openEXCELDialog(item: any): void {
    const dialogRef = this.dialog.open(ExcelZaposleniComponent, {
      data: item
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }*/

  public refresh(): void {
    this.loading = true;
    this.getKamatneStope();
  }

  public sort(event: any): void {
    this.sorting = {
      active: event.active,
      direction: event.direction.toUpperCase()
    }
    setTimeout(() => this.refresh(), 1000);
  }

  public setVisibleColumnsFromEvent(): void {
    this.displayedColumns = [];
    for (let i = 0; i < this.globalVar.KamatneStopeDisplayedColumns.length; i++) {
      this.displayedColumns.push(this.globalVar.KamatneStopeDisplayedColumns[i].name);
    }
    this.displayedColumns.push('options');
  }
}
