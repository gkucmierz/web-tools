import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrScannerComponent } from './tools/qr-scanner/qr-scanner.component';

const routes: Routes = [
  { path: 'qr-scanner', component: QrScannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
