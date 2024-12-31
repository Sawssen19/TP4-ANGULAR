import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-code-display',
  standalone: true,
  imports: [CommonModule, QRCodeModule],
  template: `
    <div class="qr-container">
      <qrcode
        [qrdata]="data"
        [width]="256"
        [errorCorrectionLevel]="'M'"
      ></qrcode>
    </div>
  `,
  styles: [`
    .qr-container {
      text-align: center;
    }
  `]
})
export class QrCodeDisplayComponent {
  @Input() data: string = '';
}