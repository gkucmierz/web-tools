import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { QrScannerComponent } from './tools/qr-scanner/qr-scanner.component';
import { QrCodeComponent } from './tools/qr-code/qr-code.component';
import { PasswordsComponent } from './tools/passwords/passwords.component';
import { Base64Component } from './tools/base64/base64.component';
import { MarkdownComponent } from './tools/markdown/markdown.component';
import { CpuLoadComponent } from './tools/cpu-load/cpu-load.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'base64', component: Base64Component },
  { path: 'cpu-load', component: CpuLoadComponent },
  { path: 'markdown', component: MarkdownComponent },
  { path: 'passwords', component: PasswordsComponent },
  { path: 'qr-scanner', component: QrScannerComponent },
  { path: 'qr-code', component: QrCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
