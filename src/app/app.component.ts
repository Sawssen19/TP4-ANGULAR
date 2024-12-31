import { Component } from '@angular/core';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QrCodeGeneratorComponent],
  template: `<app-qr-code-generator></app-qr-code-generator>`
})
export class AppComponent {}