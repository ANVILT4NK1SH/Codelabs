import { Component, input } from '@angular/core';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expenses-template',
  imports: [],
  templateUrl: './expenses-template.component.html',
  styleUrl: './expenses-template.component.css'
})
export class ExpensesTemplateComponent {
  data = input<Expense>()
}
