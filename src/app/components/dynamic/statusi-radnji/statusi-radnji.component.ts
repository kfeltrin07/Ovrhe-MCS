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
import { Sorting, StatusiRadnji } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { PaginationComponent } from '../../elements/pagination/pagination.component';
import { CreateStatusiRadnjiComponent } from './create-statusi-radnji/create-statusi-radnji.component';
import { DetailsStatusiRadnjiComponent } from './details-statusi-radnji/details-statusi-radnji.component';
import { EditStatusiRadnjiComponent } from './edit-statusi-radnji/edit-statusi-radnji.component';
import { DeleteStatusiRadnjiComponent } from './delete-statusi-radnji/delete-statusi-radnji.component';

@Component({
  selector: 'app-statusi-radnji',
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
  templateUrl: './statusi-radnji.component.html',
  styleUrl: './statusi-radnji.component.scss'
})
export class StatusiRadnjiComponent implements OnInit {
  public displayedColumns: string[] = ['IDSTATUSARADNJE', 'NAZIVSTATUSA', 'IDTVRTKE','JEZAPOCETO', 'JEZAVRSENO','SISTEMSKISTATUS','AKTIVNOST', 'options'];

  public statusiRadnji: StatusiRadnji[] = [];
  public StatusiRadnji: StatusiRadnji = {
    UKUPANBROJSLOGOVA: 0,
    RN: 0,
    SIFVLAS: "",
    IDSTATUSARADNJE: "",
    NAZIVSTATUSA: "",
    JEZAPOCETO: "",
    JEZAVRSENO: "",
    SISTEMSKISTATUS: "",
    IDTVRTKE: "",
    AKTIVNOST: "",
    IDKORISNIKA: "",
    SYSDATETIME: "",
  };


  public dataSource = this.statusiRadnji;
  public searchParam: string = '';
  public loading: boolean = true;
  public sorting: Sorting = {
    active: 'IDSTATUSARADNJE',
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
    this.getstatusiRadnji();
  }

  public getstatusiRadnji(): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'Ovrhe',
        method: 'getOVR_StatusRadnji',
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
      this.statusiRadnji = response.debugData.data;
      this.dataSource = this.statusiRadnji;
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
    const dialogRef = this.dialog.open(CreateStatusiRadnjiComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => this.refresh(), 1000);
    });
  }

  public openDetailsDialog(item: any): void {
    const dialogRef = this.dialog.open(DetailsStatusiRadnjiComponent, {
      data: item,


    });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  public openEditDialog(item: any): void {
    const dialogRef = this.dialog.open(EditStatusiRadnjiComponent, {
      data: item
    });
    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => this.refresh(), 1000);
    });
  }

  public openDeleteDialog(item: any): void {
    const dialogRef = this.dialog.open(DeleteStatusiRadnjiComponent, {
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
    this.getstatusiRadnji();
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
    for (let i = 0; i < this.globalVar.StatusiRadnjiDisplayedColumns.length; i++) {
      this.displayedColumns.push(this.globalVar.StatusiRadnjiDisplayedColumns[i].name);
    }
    this.displayedColumns.push('options');
  }
}
