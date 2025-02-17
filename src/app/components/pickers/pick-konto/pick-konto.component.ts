import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartOfAccounts, Sorting } from 'src/app/models/models.service';
import { TranslationPipe } from 'src/app/pipes/translation/translation.pipe';
import { GlobalFunctionsService } from 'src/app/services/global-functions/global-functions.service';
import { GlobalVariablesService } from 'src/app/services/global-variables/global-variables.service';
import { SessionService } from 'src/app/services/session/session.service';
import { PaginationComponent } from '../../elements/pagination/pagination.component';

@Component({
  selector: 'app-pick-konto',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    
    PaginationComponent,
    TranslationPipe,
    CommonModule,
    FormsModule,
    CdkDrag,
    CdkDragHandle
  ],
  templateUrl: './pick-konto.component.html',
  styleUrl: './pick-konto.component.scss'
})
export class PickKontoComponent {
  public displayedColumns: string[] = ['RN', 'charts-of-accounts-sif', 'charts-of-accounts-name'];
  public ChartOfAccounts: ChartOfAccounts[] = [];
  public dataSource = this.ChartOfAccounts;

  public searchParam: string = '';
  public loading: boolean = true;
  public sorting: Sorting = {
    active: 'SIFKONTO',
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
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PickKontoComponent>
  ) { }

  public ngOnInit(): void {
    this.getKonto();
  }

  public getKonto(): void {
    this.http.post(
      this.globalVar.APIHost + this.globalVar.APIFile,
      {
        action: 'w3app',
        method: 'getKonto',
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
      this.ChartOfAccounts = response.debugData.data;
      this.dataSource = this.ChartOfAccounts;
      this.length = +response.debugData.data[0].UKUPANBROJSLOGOVA;
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


  public refresh(): void {
    this.loading = true;
    this.getKonto();
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
    for (let i = 0; i < this.globalVar.KontoDisplayedColumns.length; i++) {
      this.displayedColumns.push(this.globalVar.KontoDisplayedColumns[i].name);
    }
  }

  public pickChartOfAccounts(row: ChartOfAccounts): void {
    this.dialogRef.close(row);
  }
}
