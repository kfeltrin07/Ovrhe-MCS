import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/dynamic/login/login.component';
import { SelectionScreenComponent } from './components/dynamic/selection-screen/selection-screen.component';
import { noLoginGuard, authGuard } from './guards/auth/auth.guard';
import { OvrheComponent } from './components/dynamic/ovrhe/ovrhe.component';
import { IzvjestajiComponent } from './components/dynamic/izvjestaji/izvjestaji.component';
import { VrsteRadnjiComponent } from './components/dynamic/vrste-radnji/vrste-radnji.component';
import { StatusiRadnjiComponent } from './components/dynamic/statusi-radnji/statusi-radnji.component';
import { StatusiOvrheComponent } from './components/dynamic/statusi-ovrhe/statusi-ovrhe.component';
import { GrupeTroskovaComponent } from './components/dynamic/grupe-troskova/grupe-troskova.component';
import { TroskoviComponent } from './components/dynamic/troskovi/troskovi.component';
import { KamatneStopeComponent } from './components/dynamic/kamatne-stope/kamatne-stope.component';
import { PredlosciObavijestiComponent } from './components/dynamic/predlosci-obavijesti/predlosci-obavijesti.component';
import { PredlosciZaKretaljkuComponent } from './components/dynamic/predlosci-za-kretaljku/predlosci-za-kretaljku.component';
import { TipOvrheComponent } from './components/dynamic/tip-ovrhe/tip-ovrhe.component';
import { TvrtkeComponent } from './components/dynamic/tvrtke/tvrtke.component';
import { StatusiComponent } from './components/dynamic/statusi/statusi.component';

const routes: Routes = [
  { path: 'ovrhe', component: OvrheComponent, canActivate: [authGuard()] },
  { path: 'izvjestaji', component: IzvjestajiComponent, canActivate: [authGuard()] },
  { path: 'vrste-radnji', component: VrsteRadnjiComponent, canActivate: [authGuard()] },
  { path: 'statusi-radnji', component: StatusiRadnjiComponent, canActivate: [authGuard()] },
  { path: 'statusi-ovrhe', component: StatusiOvrheComponent, canActivate: [authGuard()] },
  { path: 'grupe-troskova', component: GrupeTroskovaComponent, canActivate: [authGuard()] },
  { path: 'troskovi', component: TroskoviComponent, canActivate: [authGuard()] },
  { path: 'kamatne-stope', component: KamatneStopeComponent, canActivate: [authGuard()] },
  { path: 'predlosci-obavijesti', component: PredlosciObavijestiComponent, canActivate: [authGuard()] },
  { path: 'predlosci-za-kretaljku', component: PredlosciZaKretaljkuComponent, canActivate: [authGuard()] },
  { path: 'tip-ovrhe', component: TipOvrheComponent, canActivate: [authGuard()] },
  { path: 'tvrtke', component: TvrtkeComponent, canActivate: [authGuard()] },
  { path: 'statusi', component: StatusiComponent, canActivate: [authGuard()] },

  { path: 'login', component: LoginComponent, canActivate: [noLoginGuard()] },
  { path: 'selection-screen', component: SelectionScreenComponent, canActivate: [authGuard()] },
  { path: '', redirectTo: '/selection-screen', pathMatch: 'full' },
  { path: '**', redirectTo: '/selection-screen' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
