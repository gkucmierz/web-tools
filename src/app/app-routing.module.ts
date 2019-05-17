import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrReaderComponent } from './qr-reader/qr-reader.component';

const routes: Routes = [
  { path: 'qr-reader', component: QrReaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
