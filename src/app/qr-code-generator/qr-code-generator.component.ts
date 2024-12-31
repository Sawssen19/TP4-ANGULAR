import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeDisplayComponent } from './qr-code-display.component';
import { TextInputComponent } from './text-input.component';

@Component({
  selector: 'app-qr-code-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, QRCodeModule, QrCodeDisplayComponent, TextInputComponent],
  template: `
    <div class="container">
      <h1>Générateur de QR Code</h1>
      <app-text-input 
        [value]="qrData" 
        (valueChange)="onTextChange($event)"
      ></app-text-input>
      <app-qr-code-display 
        *ngIf="qrData" 
        [data]="qrData"
      ></app-qr-code-display>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
  `]
})
export class QrCodeGeneratorComponent {
  qrData: string = '';

  onTextChange(text: string) {
    this.qrData = text;
  }
}