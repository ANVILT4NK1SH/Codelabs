import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayDataTemplateComponent } from "../shared/templates/display-data-template/display-data-template.component";

@Component({
  selector: 'app-temp-converter',
  imports: [FormsModule, DisplayDataTemplateComponent],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {
  tempInput!: number;
  fahrenheit = signal<number | unknown>(null)

  convertTemp() {
    this.fahrenheit.set(this.tempInput * (9 / 5) + 32);
  }
}
