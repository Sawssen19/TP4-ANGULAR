import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="input-container">
      <label for="text">Entrez votre texte :</label>
      <input
        id="text"
        type="text"
        [ngModel]="value"
        (ngModelChange)="valueChange.emit($event)"
        placeholder="Saisissez le texte à convertir en QR code"
      >
    </div>
  `,
  styles: [`
    .input-container {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 8px;
    }
    input {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  `]
})
export class TextInputComponent {
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
}