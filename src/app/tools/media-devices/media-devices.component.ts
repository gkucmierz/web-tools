import { Component } from '@angular/core';

@Component({
  selector: 'app-media-devices',
  templateUrl: './media-devices.component.html',
  styleUrls: ['./media-devices.component.scss']
})
export class MediaDevicesComponent {
  devices: any[] = [];
  showIds = false;
  showKeys = false;
  getCapabilities = false;
  error: string;

  constructor() {
    this.change();
  }

  getAllKeys(obj): string[] {
    const keys = [];
    for (let i in obj) {
      keys.push(i);
    }
    return keys;
  }

  change(): void {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      this.devices = devices.map((device: any) => {
        const capabilities = device.getCapabilities ? device.getCapabilities() : [][0];
        return {
          kind: device.kind,
          label: device.label,
          ...(this.showIds ? { deviceId: device.deviceId, groupId: device.groupId } : {}),
          ...(this.showKeys ? { keys: this.getAllKeys(device) } : {}),
          ...(this.getCapabilities ? { capabilities } : {}),
        };
      });
      this.error = '';
    }).catch(error => this.error = error);
  }
}
