import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrScannerComponent } from './tools/qr-scanner/qr-scanner.component';
import { QrCodeComponent } from './tools/qr-code/qr-code.component';

const routes: Routes = [
  { path: 'qr-scanner', component: QrScannerComponent },
  { path: 'qr-code', component: QrCodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
