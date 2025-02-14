import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ColumnRef, DashboardItem, DynamicMenu, DynamicMenuReference, RightsState, SidebarItem } from 'src/app/models/models.service';
import { CookiesService } from '../cookies/cookies.service';
import { environment } from './../../../environments/environment';

type AvailableLanguages = 'en' | 'hr';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  constructor(
    public cookies: CookiesService
  ) { }

  public autoLogin: boolean = false;
  public IzvjestajPokrenut: boolean = false;
  public RequestUrl: any;
  public ProvjerioSam: boolean = false;
  public PrviPut: boolean = true;
  public VrstaUredaja: boolean = false;

  public isPaginatorShown: boolean = true;
  public oldpagination: boolean = true;

  public selectWasClicked: boolean = false;

  public RequestVarijable: any;
  public TrenutniIzvjestaj: any;

  public headerTitle: string = '';
  public headerImage: string = '';

  public sideNav!: MatSidenav;

  public env = environment.name;

  // END: development helpers

  // START: logging in messages

  public loggingInMessage: string = 'LoggingIn';

  public konekcije: any = {
    "production": [
      { value: 'http://192.168.88.169:8080/', viewValue: 'Šihterica' },
      { value: 'http://194.152.214.238/', viewValue: 'Linux' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Razvoj' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Linux iz MCS' },
      { value: 'http://192.168.88.88:8000/', viewValue: 'Čistoća' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'MCS' },
    ],
    "development": [
      { value: 'http://192.168.88.169:8080/', viewValue: 'Šihterica' },
      { value: 'http://194.152.214.238/', viewValue: 'Linux' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Razvoj' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Linux iz MCS' },
      { value: 'http://192.168.88.88:8000/', viewValue: 'Čistoća' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'MCS' },
    ],
    "mcs": [
      { value: 'http://192.168.88.169:8080/', viewValue: 'Šihterica' },
      { value: 'http://194.152.214.238/', viewValue: 'Linux' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Razvoj' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'Linux iz MCS' },
      { value: 'http://192.168.88.88:8000/', viewValue: 'Čistoća' },
      { value: 'http://192.168.88.169:8080/', viewValue: 'MCS' },
    ],
    "cistoca": [
      { value: 'http://192.168.88.88:8000/', viewValue: 'Čistoća' },
    ]
  }

  public konekcijeAPIFile: any = {
    "production": [
      { value: 'php_angularAPI_oracle_sihterica/router.php', viewValue: 'Šihterica' },
      { value: 'php_angularAPI_oracle_linux/router.php', viewValue: 'Linux' },
      { value: 'php_angularAPI_oracle_razvoj/router.php', viewValue: 'Razvoj' },
      { value: 'php_angularAPI_oracle_cistoca/router.php', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'php_angularAPI_oracle_linux/router.php', viewValue: 'Linux iz MCS' },
      { value: 'php_angularAPI_oracle_cistoca/router.php', viewValue: 'Čistoća iz MCS (192.168.88.88)' },
      { value: 'php_angularAPI_oracle_mcs/router.php', viewValue: 'MCS' },
    ],
    "development": [
      { value: 'php_angularAPI_oracle_sihterica/router.php', viewValue: 'Šihterica' },
      { value: 'php_angularAPI_oracle_linux/router.php', viewValue: 'Linux' },
      { value: 'php_angularAPI_oracle_razvoj/router.php', viewValue: 'Razvoj' },
      { value: 'php_angularAPI_oracle_cistoca/router.php', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'php_angularAPI_oracle_linux/router.php', viewValue: 'Linux iz MCS' },
      { value: 'php_angularAPI_oracle_cistoca/router.php', viewValue: 'Čistoća iz MCS (192.168.88.88)' },
      { value: 'php_angularAPI_oracle_mcs/router.php', viewValue: 'MCS' },
    ],
    "mcs": [
      { value: 'php_angularAPI_oracle_sihterica/router.php', viewValue: 'Šihterica' },
      { value: 'php_angularAPI_oracle_linux/router.php', viewValue: 'Linux' },
      { value: 'php_angularAPI_oracle_razvoj/router.php', viewValue: 'Razvoj' },
      { value: 'php_angularAPI_oracle_cistoca/router.php', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'php_angularAPI_oracle_linux/router.php', viewValue: 'Linux iz MCS' },
      { value: 'php_angularAPI_oracle_cistoca/router.php', viewValue: 'Čistoća iz MCS (192.168.88.88)' },
      { value: 'php_angularAPI_oracle_mcs/router.php', viewValue: 'MCS' },
    ],
    "cistoca": [
      { value: 'php_angularAPI_oracle_cistoca/router.php', viewValue: 'Čistoća' },
    ],
  }

  public konekcijeAPIReport: any = {
    "production": [
      { value: 'php_angularAPI_oracle_sihterica/classes/pdfs', viewValue: 'Šihterica' },
      { value: 'php_angularAPI_oracle_linux/classes/pdfs', viewValue: 'Linux' },
      { value: 'php_angularAPI_oracle_razvoj/classes/pdfs', viewValue: 'Razvoj' },
      { value: 'php_angularAPI_oracle_cistoca/classes/pdfs', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'php_angularAPI_oracle_linux/classes/pdfs', viewValue: 'Linux iz MCS' },
      { value: 'php_angularAPI_oracle_cistoca/classes/pdfs', viewValue: 'Čistoća iz MCS (192.168.88.88)' },
      { value: 'php_angularAPI_oracle_mcs/classes/pdfs', viewValue: 'MCS' },
    ],
    "development": [
      { value: 'php_angularAPI_oracle_sihterica/classes/pdfs', viewValue: 'Šihterica' },
      { value: 'php_angularAPI_oracle_linux/classes/pdfs', viewValue: 'Linux' },
      { value: 'php_angularAPI_oracle_razvoj/classes/pdfs', viewValue: 'Razvoj' },
      { value: 'php_angularAPI_oracle_cistoca/classes/pdfs', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'php_angularAPI_oracle_linux/classes/pdfs', viewValue: 'Linux iz MCS' },
      { value: 'php_angularAPI_oracle_cistoca/classes/pdfs', viewValue: 'Čistoća iz MCS (192.168.88.88)' },
      { value: 'php_angularAPI_oracle_mcs/classes/pdfs', viewValue: 'MCS' },
    ],
    "mcs": [
      { value: 'php_angularAPI_oracle_sihterica/classes/pdfs', viewValue: 'Šihterica' },
      { value: 'php_angularAPI_oracle_linux/classes/pdfs', viewValue: 'Linux' },
      { value: 'php_angularAPI_oracle_razvoj/classes/pdfs', viewValue: 'Razvoj' },
      { value: 'php_angularAPI_oracle_cistoca/classes/pdfs', viewValue: 'Čistoća iz MCS (192.168.88.169)' },
      { value: 'php_angularAPI_oracle_linux/classes/pdfs', viewValue: 'Linux iz MCS' },
      { value: 'php_angularAPI_oracle_cistoca/classes/pdfs', viewValue: 'Čistoća iz MCS (192.168.88.88)' },
      { value: 'php_angularAPI_oracle_mcs/classes/pdfs', viewValue: 'MCS' },
    ],
    "cistoca": [
      { value: 'php_angularAPI_oracle_mcs/classes/pdfs', viewValue: 'MCS' },
    ],
  }

  private vars1: string = this.cookies.getCookie('connected-database');
  private vars2: string = this.cookies.getCookie('connected-APIFile');
  private vars3: string = this.cookies.getCookie('connected-APIReport');

  public APIHost: string = this.vars1 ? this.vars1 : this.konekcije[this.env][0].value;
  public APIFile: string = this.vars2 ? this.vars2 : this.konekcijeAPIFile[this.env][0].value;
  public APIReport: string = this.vars3 ? this.vars3 : this.konekcijeAPIReport[this.env][0].value;

  public selectedLanguage: AvailableLanguages = 'hr';


  public environment: any = {
    isProduction: false,
    isLoginRequired: true,
    areBetaFeaturesIncluded: false
  }

  public dynamicMenu!: DynamicMenu[];
  public useDynamicMenus: boolean = false;
  public cVRS: RightsState | undefined = RightsState.Readonly;


  // VARIABLES
  public datumDnevnaEvidencija?: Date;

  //
  //DISPLAYED COLUMNS



  public sidebarItems: SidebarItem[] = [
    {
      namePrefix: '',
      name: 'General',
      icon: null,
      highlighted: false,
      rightsState: 1,
      open: true,
      children: [
        /*{
          namePrefix: '0.1',
          name: 'Dashboard',
          icon: 'dashboard',
          url: '/dashboard',
          highlighted: false,
          rightsState: 1,
          open: false
        },*/
        {
          namePrefix: '',
          name: 'SelectionScreen',
          icon: 'menu',
          url: '/selection-screen',
          highlighted: false,
          rightsState: 1,
          open: false
        }
      ],
    },
  ];

  public dynamicMenuReferences: DynamicMenuReference[] = [
    {
      componentName: 'selection-screen',
      componentDatabaseName: 'bilokojadozvola',
      url: '/selection-screen'
    },
  ];

  public dashboardItems: DashboardItem[] = [

  ];

}


