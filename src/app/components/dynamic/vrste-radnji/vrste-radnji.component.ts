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
import { Sorting, VrsteRadnji } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { PaginationComponent } from '../../elements/pagination/pagination.component';
import { CreateVrsteRadnjiComponent } from './create-vrste-radnji/create-vrste-radnji.component';
import { DeleteVrsteRadnjiComponent } from './delete-vrste-radnji/delete-vrste-radnji.component';
import { DetailsVrsteRadnjiComponent } from './details-vrste-radnji/details-vrste-radnji.component';
import { EditVrsteRadnjiComponent } from './edit-vrste-radnji/edit-vrste-radnji.component';

@Component({
  selector: 'app-vrste-radnji',
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
  templateUrl: './vrste-radnji.component.html',
  styleUrl: './vrste-radnji.component.scss'
})
export class VrsteRadnjiComponent implements OnInit {
  public displayedColumns: string[] = ['IDVRSTARADNJE', 'NAZIVVRSTERADNJE', 'SISTEMSKAVRSTA', 'AKTIVNOST','OPISVRSTERADNJE', 'options'];

  public vrsteRadnji: VrsteRadnji[] = [];
  public VrsteRadnji: VrsteRadnji = {
    UKUPANBROJSLOGOVA: 0,
    RN: 0,
    SIFVLAS: '',
    IDVRSTARADNJE: '',
    NAZIVVRSTERADNJE: '',
    OPISVRSTERADNJE: '',
    SISTEMSKAVRSTA: '',
    IDTVRTKE: '',
    AKTIVNOST: '',
    IDKORISNIKA: '',
    SYSDATETIME: ''
  };


  public dataSource = this.vrsteRadnji;
  public searchParam: string = '';
  public loading: boolean = true;
  public sorting: Sorting = {
    active: 'IDVRSTARADNJE',
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
    this.getVrsteRadnji();
  }

  public getVrsteRadnji(): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'Ovrhe',
        method: 'getOVR_VrsteRadnji',
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
      this.vrsteRadnji = response.debugData.data;
      this.dataSource = this.vrsteRadnji;
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
    const dialogRef = this.dialog.open(CreateVrsteRadnjiComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => this.refresh(), 1000);
    });
  }

  public openDetailsDialog(item: any): void {
    const dialogRef = this.dialog.open(DetailsVrsteRadnjiComponent, {
      data: item,


    });
    dialogRef.afterClosed().subscribe((result) => { });
  }

  public openEditDialog(item: any): void {
    const dialogRef = this.dialog.open(EditVrsteRadnjiComponent, {
      data: item
    });
    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => this.refresh(), 1000);
    });
  }

  public openDeleteDialog(item: any): void {
    const dialogRef = this.dialog.open(DeleteVrsteRadnjiComponent, {
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
    this.getVrsteRadnji();
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
    for (let i = 0; i < this.globalVar.VrsteRadnjiDisplayedColumns.length; i++) {
      this.displayedColumns.push(this.globalVar.VrsteRadnjiDisplayedColumns[i].name);
    }
    this.displayedColumns.push('options');
  }
}
