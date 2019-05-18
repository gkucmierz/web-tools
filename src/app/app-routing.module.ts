import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { JsBeautifierComponent } from './js-beautifier/js-beautifier.component';

const routes: Routes = [
  { path: 'qr-scanner', component: QrScannerComponent },
  { path: 'js-beautifier', component: JsBeautifierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
