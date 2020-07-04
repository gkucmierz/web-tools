
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';

import { NgQrScannerModule } from 'angular2-qrscanner';
import { QrCodeModule } from 'ng-qrcode';

import { MenuComponent } from './menu/menu.component';
import { QrScannerComponent } from './tools/qr-scanner/qr-scanner.component';
import { QrCodeComponent } from './tools/qr-code/qr-code.component';
import { PasswordsComponent } from './tools/passwords/passwords.component';
import { Base64Component } from './tools/base64/base64.component';
import { MarkdownComponent } from './tools/markdown/markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    QrScannerComponent,
    QrCodeComponent,
    PasswordsComponent,
    Base64Component,
    MarkdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    NgQrScannerModule,
    QrCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
