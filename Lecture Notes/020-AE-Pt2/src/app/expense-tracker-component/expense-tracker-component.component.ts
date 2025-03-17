import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayDataTemplateComponent } from "../shared/templates/display-data-template/display-data-template.component";
import { Expense } from '../shared/models/expense.model';
import { ExpensesTemplateComponent } from "../shared/templates/expenses-template/expenses-template.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-tracker-component',
  imports: [FormsModule, DisplayDataTemplateComponent, ExpensesTemplateComponent, CommonModule],
  templateUrl: './expense-tracker-component.component.html',
  styleUrl: './expense-tracker-component.component.css',
})
export class ExpenseTrackerComponentComponent {
  descriptionInput!: string;
  amountInput!: number;
  newExpense!: Expense;
  expenses = signal<Expense[]>([]);
  total = signal<number>(0);

  addExpense() {
    this.newExpense = {description: this.descriptionInput, amount: this.amountInput}
    this.expenses.update((expenses) => [...expenses, this.newExpense]);
    this.total.update((currentTotal) => currentTotal + this.amountInput)
  }
}
