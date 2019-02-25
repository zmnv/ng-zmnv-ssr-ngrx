import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
// import { DBModule } from '@ngrx/db';

import { reducers, CustomSerializer, metaReducers } from './app.reducer';
// import { schema } from './db';

import { AppComponent } from '@app/core/app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { InViewportModule } from 'ng-in-viewport';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

const REDUX = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot(),
  StoreDevtoolsModule.instrument({
    name: 'NgRx Spacesib',
    maxAge: 5,
    logOnly: environment.production,
  }),
  EffectsModule.forRoot([]),
  // DBModule.provideDB(schema),
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({appId: 'ng-spacesib'}),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TransferHttpCacheModule,
    ...REDUX,
    CoreModule,
    ScrollToModule.forRoot(),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    // {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false }}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
