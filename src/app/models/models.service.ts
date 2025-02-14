import { Injectable } from '@angular/core';

// START: types
export type Language = 'en' | 'hr';
export type TodoStateName = 'Urgent' | 'InProgress' | 'Next' | 'ForLater';
// END: types

// START: enums
export enum CRUDAction {
  Delete,
  Insert,
  Update
}

export interface Konekcija {
  value: string;
  viewValue: string;
}

export enum RightsState {
  Invisible,
  Readonly,
  Editable
}
// END: enums

// START: session user
export interface SessionUser {
  ID?: number;
  displayedUsername?: string;
  username?: string;
  password?: string;
  sessionID: string;
  roleID?: number;
  owner?: string;
  ownerID?: string;
  IDVlasnika?: number;
  ULOGA?: string;
  ULOGA_NAZIV: string;
}

export interface LoginBody {
  action: string;
  method: string;
  data: UserMetadata;
}

export interface Owner {
  UKUPANBROJSLOGOVA: number;
  RN: number;
  ID_KORISNIKA: string;
  ID_VLASNIKA: string;
  NAZIV_VLASNIKA: string;
  USERNAME: string;
}


export interface LogoutBody {
  action: string;
  method: string;
  data: UserMetadata;
}

export interface UserMetadata {
  pOwner: string;
  pUsername: string;
  pPassword: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserInfoBody {
  action: string;
  method: string;
  sid: string;
  data: UserMetadata;
}
// END: session user

// START: dashboard items
export interface DashboardItem {
  name: string;
  icon: string;
  rowHeight: number;
  rightsState: RightsState;
  items: DashboardSubitem[];
  url: string
}

export interface DashboardSubitem {
  name: string;
  icon: string;
  url: string;
  rightsState: RightsState;

}

export interface DynamicMenu {
  UKUPANBROJSLOGOVA: number;
  RN: number;
  ID: number;
  USERNAME: string;
  MENI: string;
  OPIS_MENI: string;
  DBUSER: string;
  MENUPRIKAZI: boolean;
  IDULOGE: number;
  ULOGA: string;
  DOZVOLEMENU: string;
  UPDMOZE: string;
}

export interface DynamicMenuReference {
  componentName: string;
  componentDatabaseName: string;
  url: string;
}
// END: dashboard items

// START: sidebar items
export interface SidebarItem {
  namePrefix?: string;
  name: string;
  icon?: string | null;
  open: boolean;
  rightsState: RightsState;
  url?: string;
  dialogComponent?: any;
  highlighted: boolean;
  children?: SidebarItem[];
}

export interface SidebarItemState {
  name: string;
  icon?: string | null;
  open: boolean;
  children?: SidebarItem[];
}
// END: sidebar items

// START: components

export interface RegisteredPersonMenu {
  UKUPANBROJSLOGOVA: number;
  RN: number;
  ID: number;
  USERNAME: string;
  MENI: string;
  OPIS_MENI: string;
  DBUSER: string;
  DANE: boolean;
}

export interface DashboardItems {
  UKUPANBROJSLOGOVA: number;
  RN: number;
  NUMBEROFROLES: string;
  NUMBEROFREGISTEREDPERSONS: string;
  NUMBEROFAPPS: string;
  NUMBEROFOWNERS: string;
  NUMBEROFMENUS: string;
  NUMBEROFPERMISSIONS: string;
}
export interface DashboardItemsLinearChart {
  UKUPANBROJSLOGOVA: number;
  RN: number;
  NUMBEROFROLES: string;
  NUMBEROFREGISTEREDPERSONS: string;
  NUMBEROFAPPS: string;
  NUMBEROFOWNERS: string;
  NUMBEROFMENUS: string;
  NUMBEROFPERMISSIONS: string;
}

// MODELI ZA TABELU

export enum TodoState {
  Urgent,
  InProgress,
  Next,
  ForLater
}

export interface ReadPostRequestMain {
  action: string;
  method: string;
  sid?: string;
  data: ReadPostRequestBody;
}

export interface ReadPostRequestBody {
  limit?: number;
  pActive?: number;
  pAdminId?: number;
  pAdresa?: string;
  pComment?: string;
  pComputerId?: number;
  pComputerListId?: string;
  pComputerModelId?: number;
  pComputerTypesId?: number;
  pComputerOS?: number;
  pComputerOSVersion?: number;
  pComputerOSArchitecture?: number;
  pComputerOSKernelVersions?: number;
  pContact?: string;
  pCreationDate?: string;
  pModifiedDate?: string;
  pDateCreation?: string;
  pDateMod?: string;
  pDescription?: string;
  pDioAdresa?: string;
  pDioAdresaNOT?: string;
  pDioAktivan?: string;
  pDioAktivanNOT?: string;
  pDioArhitektura?: string;
  pDioArhitekturaNOT?: string;
  pDioDatumInstalacije?: string;
  pDioDatumInstalacijeNOT?: string;
  pDioEmail?: string;
  pDioEmailNOT?: string;
  pDioIDa?: string;
  pDioIDaNOT?: string;
  pDioKategorije?: string;
  pDioKategorijeNOT?: string;
  pDioKomentar?: string;
  pDioKomentarNOT?: string;
  pDioKontakta?: string;
  pDioKontaktaNOT?: string;
  pDioModela?: string;
  pDioModelaNOT?: string;
  pDioNazivRacunala?: string;
  pDioNazivRacunalaNOT?: string;
  pDioNaziva?: string;
  pDioNazivaNOT?: string;
  pDioNazivaProcesora?: string;
  pDioNazivaProcesoraNOT?: string;
  pDioNazivaProizvodjaca?: string;
  pDioNazivaProizvodjacaNOT?: string;
  pDioOperacijskogSustava?: string;
  pDioOperacijskogSustavaNOT?: string;
  pDioPassword?: string;
  pDioPasswordNOT?: string;
  pDioSerijskog?: string;
  pDioSerijskogNOT?: string;
  pDioUloge?: string;
  pDioUlogeNOT?: string;
  pDioUsername?: string;
  pDioUsernameNOT?: string;
  pDioVerzije?: string;
  pDioVerzijeNOT?: string;
  pDioVerzijeSoftvera?: string;
  pDioVerzijeSoftveraNOT?: string;
  pDioVrste?: string;
  pDioVrsteNOT?: string;
  pDioZupanije?: string;
  pDioZupanijeNOT?: string;
  pDueDate?: string;
  pEmail?: string;
  pManufacturersID?: number;
  pName?: string;
  pNapomena?: string;
  pSerial?: string;
  pID?: number;
  pNedozvoljen?: any;
  pID_Korisnika?: string;
  pItemID?: number;
  pItemId?: number;
  pItemType?: string;
  pPassword?: string;
  pPoruka?: string;
  pReceiverId?: number;
  pSenderId?: number;
  pState?: TodoState;
  pTitle?: string;
  pUlogaID?: number;
  pUlogaId?: number;
  pUserID?: number;
  pZupanijaID?: number;
  pZupanijaId?: number;
  pSelectedZupanijaID?: number;
  pSelectedIspostavaID?: number;
  pSoftwareCategoriesId?: number;
  pSqlParams?: string;
  pUloga?: number;
  pUsername?: string;
  pPrioriter?: string;
  pKorisnik?: string;
  pIDObavijesti?: string;
  pIDKorisnika?: string;
  pZaglavlje1?: string;
  pZaglavlje2?: string;
  pZaglavlje3?: string;
  pZaglavlje4?: string;
  pComputerID?: number;
  pStatusID?: number;
  pStatusAktivnostiID?: number;
  pIDNew?: string;
  pUsernameNew?: string;
  pUkupno?: boolean;
  page?: number;
  pSifSheme?: string;
  pIdKorisnika?: number;
  sort?: ReadPostRequestPropertyAndDirection[];
}

export interface ReadPostRequestPropertyAndDirection {
  property: string;
  direction: string;
}

// START: app API
export interface ColumnRef {
  displayedName: string;
  name: string;
}

export interface Filter {
  name: string;
  isInclude: boolean;
  parameter: string;
}
export interface Sorting {
  active: string;
  direction: 'ASC' | 'DESC';
}

// END: app API

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor() { }
}
