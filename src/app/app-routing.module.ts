import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/dynamic/login/login.component';
import { SelectionScreenComponent } from './components/dynamic/selection-screen/selection-screen.component';
import { noLoginGuard, authGuard } from './guards/auth/auth.guard';

const routes: Routes = [

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
