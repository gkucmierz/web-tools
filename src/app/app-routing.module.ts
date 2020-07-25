import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { QrScannerComponent } from './tools/qr-scanner/qr-scanner.component';
import { QrCodeComponent } from './tools/qr-code/qr-code.component';
import { PasswordsComponent } from './tools/passwords/passwords.component';
import { Base64Component } from './tools/base64/base64.component';
import { MarkdownComponent } from './tools/markdown/markdown.component';
import { CpuLoadComponent } from './tools/cpu-load/cpu-load.component';
import { MediaDevicesComponent } from './tools/media-devices/media-devices.component';
import { TemperatureConverterComponent } from './tools/temperature-converter/temperature-converter.component';
import { SocialLinksComponent } from './tools/social-links/social-links.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'base64',
    component: Base64Component,
    data: { title: 'Base64 Transcoder' },
  },
  {
    path: 'cpu-load',
    component: CpuLoadComponent,
    data: { title: 'CPU Load' },
  },
  {
    path: 'markdown',
    component: MarkdownComponent,
    data: { title: 'Markdown Editor' },
  },
  {
    path: 'media-devices',
    component: MediaDevicesComponent,
    data: { title: 'Media Devices Inspector' },
  },
  {
    path: 'passwords',
    component: PasswordsComponent,
    data: { title: 'Passwords Generator' },
  },
  {
    path: 'social-links',
    component: SocialLinksComponent,
    data: { title: 'Social Links Sanitizer' },
  },
  {
    path: 'temperature-converter',
    component: TemperatureConverterComponent,
    data: { title: 'Temperature Converter' },
  },
  {
    path: 'qr-scanner',
    component: QrScannerComponent,
    data: { title: 'QR Scanner' },
  },
  {
    path: 'qr-code',
    component: QrCodeComponent,
    data: { title: 'QR Code Generator' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
