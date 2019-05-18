import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';

const routes: Routes = [
  { path: 'qr-scanner', component: QrScannerComponent },
  { path: 'barcode-scanner', component: BarcodeScannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
