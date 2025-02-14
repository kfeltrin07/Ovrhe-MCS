import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/base-layout/sidenav/sidenav.component';
import { ToolbarComponent } from './components/base-layout/toolbar/toolbar.component';
import { LoadingComponent } from './components/elements/loading/loading.component';
import { ErrorInterceptor } from './services/intercept/error/error.interceptor';
import { LoadingInterceptor } from './services/intercept/loading/loading.interceptor';
import { LoggingInterceptor } from './services/intercept/logging/logging.interceptor';
import { SidenavService } from './services/sidenav/sidenav.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,

    LoadingComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  providers: [
    SidenavService,
    { provide: LOCALE_ID, useValue: 'hr-HR' },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
