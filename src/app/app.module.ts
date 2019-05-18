import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { NgQrScannerModule } from 'angular2-qrscanner';
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { MenuComponent } from './menu/menu.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    
    MenuComponent,
    QrScannerComponent,
    BarcodeScannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatButtonToggleModule,

    NgQrScannerModule,
    BarecodeScannerLivestreamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
