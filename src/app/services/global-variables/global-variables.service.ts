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

  public IDKORISNIKAColumn: ColumnRef = {
    displayedName: 'IDKORISNIKA',
    name: 'IDKORISNIKA'
  };

  public SYSDATETIMEColumn: ColumnRef = {
    displayedName: 'SYSDATETIME',
    name: 'SYSDATETIME'
  };

  public RNColumn: ColumnRef = {
    displayedName: 'RN',
    name: 'RN'
  };

  public SIFVLASColumn: ColumnRef = {
    displayedName: 'SIFVLAS',
    name: 'SIFVLAS'
  };

  public IDVRSTARADNJEColumn: ColumnRef = {
    displayedName: 'IDVRSTARADNJE',
    name: 'IDVRSTARADNJE'
  };

  public NAZIVVRSTERADNJEColumn: ColumnRef = {
    displayedName: 'NAZIVVRSTERADNJE',
    name: 'NAZIVVRSTERADNJE'
  };

  public OPISVRSTERADNJEColumn: ColumnRef = {
    displayedName: 'OPISVRSTERADNJE',
    name: 'OPISVRSTERADNJE'
  };

  public SISTEMSKAVRSTAColumn: ColumnRef = {
    displayedName: 'SISTEMSKAVRSTA',
    name: 'SISTEMSKAVRSTA'
  };

  public IDTVRTKEColumn: ColumnRef = {
    displayedName: 'IDTVRTKE',
    name: 'IDTVRTKE'
  };

  public AKTIVNOSTColumn: ColumnRef = {
    displayedName: 'AKTIVNOST',
    name: 'AKTIVNOST'
  };

  public VrsteRadnjiDisplayedColumns: ColumnRef[] = [
    this.IDVRSTARADNJEColumn,
    this.NAZIVVRSTERADNJEColumn,
    this.SISTEMSKAVRSTAColumn,
    this.AKTIVNOSTColumn,
    this.OPISVRSTERADNJEColumn,
  ]

  public VrsteRadnjiColumnsList: ColumnRef[] = [
    this.SIFVLASColumn,
    this.IDVRSTARADNJEColumn,
    this.NAZIVVRSTERADNJEColumn,
    this.SISTEMSKAVRSTAColumn,
    this.AKTIVNOSTColumn,
    this.OPISVRSTERADNJEColumn,
    this.IDTVRTKEColumn,
    this.IDKORISNIKAColumn,
    this.SYSDATETIMEColumn,
  ]

  public IDSTATUSARADNJEColumn: ColumnRef = {
    displayedName: 'IDSTATUSARADNJE',
    name: 'IDSTATUSARADNJE'
  };

  public NAZIVSTATUSAColumn: ColumnRef = {
    displayedName: 'NAZIVSTATUSA',
    name: 'NAZIVSTATUSA'
  };

  public JEZAPOCETOColumn: ColumnRef = {
    displayedName: 'JEZAPOCETO',
    name: 'JEZAPOCETO'
  };

  public JEZAVRSENOColumn: ColumnRef = {
    displayedName: 'JEZAVRSENO',
    name: 'JEZAVRSENO'
  };

  public SISTEMSKISTATUSColumn: ColumnRef = {
    displayedName: 'SISTEMSKISTATUS',
    name: 'SISTEMSKISTATUS'
  };

  public StatusiRadnjiDisplayedColumns: ColumnRef[] = [
    this.IDSTATUSARADNJEColumn,
    this.NAZIVSTATUSAColumn,
    this.IDTVRTKEColumn,
    this.JEZAPOCETOColumn,
    this.JEZAVRSENOColumn,
    this.SISTEMSKISTATUSColumn,
    this.AKTIVNOSTColumn
  ]

  public StatusiRadnjiColumnsList: ColumnRef[] = [
    this.SIFVLASColumn,
    this.IDSTATUSARADNJEColumn,
    this.NAZIVSTATUSAColumn,
    this.JEZAPOCETOColumn,
    this.JEZAVRSENOColumn,
    this.SISTEMSKISTATUSColumn,
    this.IDTVRTKEColumn,
    this.AKTIVNOSTColumn,
    this.IDKORISNIKAColumn,
    this.SYSDATETIMEColumn,
  ]

  public IDTIPOVRHEColumn: ColumnRef = {
    displayedName: 'IDTIPOVRHE',
    name: 'IDTIPOVRHE'
  };

  public NAZIVTIPAOVRHEColumn: ColumnRef = {
    displayedName: 'NAZIVTIPAOVRHE',
    name: 'NAZIVTIPAOVRHE'
  };

  public OZNAKATIPAOVRHEColumn: ColumnRef = {
    displayedName: 'OZNAKATIPAOVRHE',
    name: 'OZNAKATIPAOVRHE'
  };

  public PREFIXPNBColumn: ColumnRef = {
    displayedName: 'PREFIXPNB',
    name: 'PREFIXPNB'
  };

  public KONTOColumn: ColumnRef = {
    displayedName: 'KONTO',
    name: 'KONTO'
  };

  public PROTUKONTOColumn: ColumnRef = {
    displayedName: 'PROTUKONTO',
    name: 'PROTUKONTO'
  };

  public TIPDOKUMENTAERPColumn: ColumnRef = {
    displayedName: 'TIPDOKUMENTAERP',
    name: 'TIPDOKUMENTAERP'
  };

  public TipOvrheDisplayedColumns: ColumnRef[] = [
    this.IDTIPOVRHEColumn,
    this.NAZIVTIPAOVRHEColumn,
    this.PREFIXPNBColumn,
    this.KONTOColumn,
    this.PROTUKONTOColumn,
    this.TIPDOKUMENTAERPColumn,
    this.OZNAKATIPAOVRHEColumn,
  ]

  public TipOvrheColumnsList: ColumnRef[] = [
    this.SIFVLASColumn,
    this.IDTIPOVRHEColumn,
    this.NAZIVTIPAOVRHEColumn,
    this.PREFIXPNBColumn,
    this.KONTOColumn,
    this.PROTUKONTOColumn,
    this.TIPDOKUMENTAERPColumn,
    this.OZNAKATIPAOVRHEColumn,
    this.IDTVRTKEColumn,
    this.IDKORISNIKAColumn,
    this.SYSDATETIMEColumn,
  ]

  public KontoSifColumn: ColumnRef = {
    displayedName: 'ChartOfAccountsSif',
    name: 'charts-of-accounts-sif'
  };
  public KontoNameColumn: ColumnRef = {
    displayedName: 'ChartOfAccountsName',
    name: 'charts-of-accounts-name'
  };
  public KontoAccountBalancesColumn: ColumnRef = {
    displayedName: 'ChartOfAccountsAccountBalances',
    name: 'charts-of-accounts-account-balances'
  };
  public KontoBalanceIndicatorColumn: ColumnRef = {
    displayedName: 'ChartOfAccountsBalanceIndicator',
    name: 'charts-of-accounts-balance-indicator'
  };
  public KontoForeignExchangeIndicatorColumn: ColumnRef = {
    displayedName: 'ChartOfAccountsForeignExchangeIndicator',
    name: 'charts-of-accounts-foreign-exchange-indicator'
  };
  public KontoIncomeOrExpenditureIndicatorColumn: ColumnRef = {
    displayedName: 'ChartOfAccountsIncomeOrExpenditureIndicator',
    name: 'charts-of-accounts-income-or-expenditure-indicator'
  };
  public KontoIndicatorOJColumn: ColumnRef = {
    displayedName: 'ChartOfAccountsIndicatorOJ',
    name: 'charts-of-accounts-indicator-OJ'
  };
  public KontoEmployeesColumn: ColumnRef = {
    displayedName: 'ChartOfAccountsEmployees',
    name: 'charts-of-accounts-employees'
  };
  public KontoUserIDColumn: ColumnRef = {
    displayedName: 'UserID',
    name: 'user-id'
  };
  public KontoSysDateTimeColumn: ColumnRef = {
    displayedName: 'SysDateTime',
    name: 'sys-datetime'
  };

  public KontoDisplayedColumns: ColumnRef[] = [
    this.KontoSifColumn,
    this.KontoNameColumn,
    this.KontoAccountBalancesColumn,
    this.KontoBalanceIndicatorColumn,
    this.KontoForeignExchangeIndicatorColumn,
    this.KontoIncomeOrExpenditureIndicatorColumn,
    this.KontoIndicatorOJColumn,
    this.KontoEmployeesColumn,
  ];
  public KontoColumnsList: ColumnRef[] = [
    this.RNColumn,
    this.KontoSifColumn,
    this.KontoNameColumn,
    this.KontoAccountBalancesColumn,
    this.KontoBalanceIndicatorColumn,
    this.KontoForeignExchangeIndicatorColumn,
    this.KontoIncomeOrExpenditureIndicatorColumn,
    this.KontoIndicatorOJColumn,
    this.KontoEmployeesColumn,
    this.KontoUserIDColumn,
    this.KontoSysDateTimeColumn
  ];

  public NAZIVTVRTKEColumn: ColumnRef = {
    displayedName: 'NAZIVTVRTKE',
    name: 'NAZIVTVRTKE'
  };

  public ADRESATVRTKEColumn: ColumnRef = {
    displayedName: 'ADRESATVRTKE',
    name: 'ADRESATVRTKE'
  };

  public BAZAERPColumn: ColumnRef = {
    displayedName: 'BAZAERP',
    name: 'BAZAERP'
  };

  public BAZALOCALColumn: ColumnRef = {
    displayedName: 'BAZALOCAL',
    name: 'BAZALOCAL'
  };

  public CONNSTRINGERPColumn: ColumnRef = {
    displayedName: 'CONNSTRINGERP',
    name: 'CONNSTRINGERP'
  };

  public CONNSTRINGLOCALColumn: ColumnRef = {
    displayedName: 'CONNSTRINGLOCAL',
    name: 'CONNSTRINGLOCAL'
  };

  public BROJNEPLACENIHRACUNAColumn: ColumnRef = {
    displayedName: 'BROJNEPLACENIHRACUNA',
    name: 'BROJNEPLACENIHRACUNA'
  };

  public OIBTVRTKEColumn: ColumnRef = {
    displayedName: 'OIBTVRTKE',
    name: 'OIBTVRTKE'
  };

  public MATICNIBROJTVRTKEColumn: ColumnRef = {
    displayedName: 'MATICNIBROJTVRTKE',
    name: 'MATICNIBROJTVRTKE'
  };

  public NAZIVTVRTKEOVRSITELJAColumn: ColumnRef = {
    displayedName: 'NAZIVTVRTKEOVRSITELJA',
    name: 'NAZIVTVRTKEOVRSITELJA'
  };

  public ADRESATVRTKEOVRSITELJAColumn: ColumnRef = {
    displayedName: 'ADRESATVRTKEOVRSITELJA',
    name: 'ADRESATVRTKEOVRSITELJA'
  };

  public IBANTVRTKEOVRSITELJAColumn: ColumnRef = {
    displayedName: 'IBANTVRTKEOVRSITELJA',
    name: 'IBANTVRTKEOVRSITELJA'
  };

  public KONTOUPLATEColumn: ColumnRef = {
    displayedName: 'KONTOUPLATE',
    name: 'KONTOUPLATE'
  };

  public PNBPREFIXPRAVNEOSOBEColumn: ColumnRef = {
    displayedName: 'PNBPREFIXPRAVNEOSOBE',
    name: 'PNBPREFIXPRAVNEOSOBE'
  };

  public PNBPREFIXFIZICKEOSOBEColumn: ColumnRef = {
    displayedName: 'PNBPREFIXFIZICKEOSOBE',
    name: 'PNBPREFIXFIZICKEOSOBE'
  };

  public IBANKARTICAColumn: ColumnRef = {
    displayedName: 'IBANKARTICA',
    name: 'IBANKARTICA'
  };

  public TvrtkeDisplayedColumns: ColumnRef[] = [
    this.IDTVRTKEColumn,
    this.NAZIVTVRTKEColumn,
    this.ADRESATVRTKEColumn,
    this.AKTIVNOSTColumn,
    this.BAZAERPColumn,
    this.BAZALOCALColumn,
    this.CONNSTRINGERPColumn,
    this.CONNSTRINGLOCALColumn,
    this.BROJNEPLACENIHRACUNAColumn,
  ];
  public TvrtkeColumnsList: ColumnRef[] = [
    this.RNColumn,
    this.IDTVRTKEColumn,
    this.NAZIVTVRTKEColumn,
    this.ADRESATVRTKEColumn,
    this.AKTIVNOSTColumn,
    this.BAZAERPColumn,
    this.BAZALOCALColumn,
    this.CONNSTRINGERPColumn,
    this.CONNSTRINGLOCALColumn,
    this.BROJNEPLACENIHRACUNAColumn,
    this.OIBTVRTKEColumn,
    this.MATICNIBROJTVRTKEColumn,
    this.NAZIVTVRTKEOVRSITELJAColumn,
    this.ADRESATVRTKEOVRSITELJAColumn,
    this.IBANTVRTKEOVRSITELJAColumn,
    this.KONTOUPLATEColumn,
    this.PNBPREFIXPRAVNEOSOBEColumn,
    this.PNBPREFIXFIZICKEOSOBEColumn,
    this.IBANKARTICAColumn,
    this.IDKORISNIKAColumn,
    this.SYSDATETIMEColumn,
  ];

  public IDSTATUSAColumn: ColumnRef = {
    displayedName: 'IDSTATUSA',
    name: 'IDSTATUSA'
  };

  public JEZATVORENOColumn: ColumnRef = {
    displayedName: 'JEZATVORENO',
    name: 'JEZATVORENO'
  };


  public StatusiDisplayedColumns: ColumnRef[] = [
    this.IDSTATUSAColumn,
    this.NAZIVSTATUSAColumn,
    this.IDTVRTKEColumn,
    this.JEZATVORENOColumn,
    this.AKTIVNOSTColumn,
  ];
  public StatusiColumnsList: ColumnRef[] = [
    this.RNColumn,
    this.IDSTATUSAColumn,
    this.NAZIVSTATUSAColumn,
    this.IDTVRTKEColumn,
    this.JEZATVORENOColumn,
    this.AKTIVNOSTColumn,
    this.IDKORISNIKAColumn,
    this.SYSDATETIMEColumn,
  ];

  public IDKAMATNESTOPEColumn: ColumnRef = {
    displayedName: 'IDKAMATNESTOPE',
    name: 'IDKAMATNESTOPE'
  };

  public IDTIPKAMATNESTOPEColumn: ColumnRef = {
    displayedName: 'IDTIPKAMATNESTOPE',
    name: 'IDTIPKAMATNESTOPE'
  };

  public DATUMODColumn: ColumnRef = {
    displayedName: 'DATUMOD',
    name: 'DATUMOD'
  };

  public DATUMDOColumn: ColumnRef = {
    displayedName: 'DATUMDO',
    name: 'DATUMDO'
  };

  public POSTOTAKKAMATAColumn: ColumnRef = {
    displayedName: 'POSTOTAKKAMATA',
    name: 'POSTOTAKKAMATA'
  };

  public KamatneStopeDisplayedColumns: ColumnRef[] = [
    this.IDKAMATNESTOPEColumn,
    this.IDTIPKAMATNESTOPEColumn,
    this.DATUMODColumn,
    this.DATUMDOColumn,
    this.POSTOTAKKAMATAColumn,
  ];
  public KamatneStopeColumnsList: ColumnRef[] = [
    this.RNColumn,
    this.IDKAMATNESTOPEColumn,
    this.IDTIPKAMATNESTOPEColumn,
    this.DATUMODColumn,
    this.DATUMDOColumn,
    this.POSTOTAKKAMATAColumn,
    this.IDTVRTKEColumn,
    this.IDKORISNIKAColumn,
    this.SYSDATETIMEColumn,
  ];

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
    {
      namePrefix: '',
      name: 'Ovrhe',
      icon: 'gavel',
      highlighted: false,
      rightsState: 1,
      open: false,
      url: '/ovrhe'
    },
    {
      namePrefix: '',
      name: 'Izvjestaji',
      icon: 'now_widgets',
      highlighted: false,
      rightsState: 1,
      open: false,
      url: '/izvjestaji'
    },
    {
      namePrefix: '',
      name: 'Codebooks',
      icon: '',
      highlighted: false,
      rightsState: 1,
      open: false,
      children: [
        {
          namePrefix: '',
          name: 'VrsteRadnji',
          icon: 'post_add',
          url: '/vrste-radnji',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'StatusiRadnji',
          icon: 'layers',
          url: '/statusi-radnji',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'StatusiOvrhe',
          icon: 'local_library',
          url: '/statusi-ovrhe',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'TipOvrhe',
          icon: 'grid_3x3',
          url: '/tip-ovrhe',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'GrupaTroskova',
          icon: 'account_balance_wallet',
          url: '/grupe-troskova',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'Troskovi',
          icon: 'credit_card',
          url: '/troskovi',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'PredlosciZaKretaljku',
          icon: 'bookmarks',
          url: '/predlosci-za-kretaljku',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'KamatneStope',
          icon: 'show_chart',
          url: '/kamatne-stope',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'PredlosciObavijesti',
          icon: 'feed',
          url: '/predlosci-obavijesti',
          highlighted: false,
          rightsState: 1,
          open: false
        },
      ]
    },
    {
      namePrefix: '',
      name: 'Administration',
      icon: '',
      highlighted: false,
      rightsState: 1,
      open: false,
      children: [
        {
          namePrefix: '',
          name: 'Tvrtke',
          icon: 'house',
          url: '/tvrtke',
          highlighted: false,
          rightsState: 1,
          open: false
        },
        {
          namePrefix: '',
          name: 'Statusi',
          icon: 'query_stats',
          url: '/statusi',
          highlighted: false,
          rightsState: 1,
          open: false
        },
      ]
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
    {
      name: 'Ovrhe',
      icon: 'gavel',
      rowHeight: 1,
      rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
      items: [],
      url: '/ovrhe'
    },
    {
      name: 'Izvjestaji',
      icon: 'now_widgets',
      rowHeight: 1,
      rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
      items: [],
      url: '/izvjestaji'
    },
    {
      name: 'Codebooks',
      icon: 'point_of_sale',
      rowHeight: 2,
      rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
      items: [
        {
          name: 'VrsteRadnji',
          icon: 'post_add',
          url: '/vrste-radnji',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
        },
        {
          name: 'StatusiRadnji',
          icon: 'layers',
          url: '/statusi-radnji',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
        },
        {
          name: 'StatusiOvrhe',
          icon: 'local_library',
          url: '/statusi-ovrhe',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
        },
        {
          name: 'TipOvrhe',
          icon: 'grid_3x3',
          url: '/tip-ovrhe',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
        },
        {
          name: 'GrupaTroskova',
          icon: 'account_balance_wallet',
          url: '/grupe-troskova',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,

        },
        {
          name: 'Troskovi',
          icon: 'credit_card',
          url: '/troskovi',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,

        },
        {
          name: 'PredlosciZaKretaljku',
          icon: 'bookmarks',
          url: '/predlosci-za-kretaljku',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,

        },
        {
          name: 'KamatneStope',
          icon: 'show_chart',
          url: '/kamatne-stope',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,

        },
        {
          name: 'PredlosciObavijesti',
          icon: 'feed',
          url: '/predlosci-obavijesti',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,

        }
      ],
      url: ''
    },
    {
      name: 'Administration',
      icon: 'settings',
      rowHeight: 1,
      rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
      items: [
        {
          name: 'Tvrtke',
          icon: 'house',
          url: '/tvrtke',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
        },
        {
          name: 'Statusi',
          icon: 'query_stats',
          url: '/statusi',
          rightsState: this.useDynamicMenus ? RightsState.Invisible : RightsState.Editable,
        },
      ],
      url: ''
    },

  ];

}


