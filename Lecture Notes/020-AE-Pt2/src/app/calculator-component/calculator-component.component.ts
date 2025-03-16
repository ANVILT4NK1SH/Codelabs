import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayDataTemplateComponent } from '../shared/templates/display-data-template/display-data-template.component';

@Component({
  selector: 'app-calculator-component',
  imports: [FormsModule, DisplayDataTemplateComponent],
  templateUrl: './calculator-component.component.html',
  styleUrl: './calculator-component.component.css',
})
export class CalculatorComponentComponent {
  num1 = 0;
  num2 = 0;
  total = signal<number | unknown>(null);

  add() {
    this.total.set(this.num1 + this.num2);
  }

  subtract() {
    this.total.set(this.num1 - this.num2);
  }

  multiply() {
    this.total.set(this.num1 * this.num2);
  }

  divide() {
    this.total.set(this.num1 / this.num2);
  }
}
