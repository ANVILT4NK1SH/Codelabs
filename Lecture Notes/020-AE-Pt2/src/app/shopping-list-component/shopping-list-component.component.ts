import { Component, signal } from '@angular/core';
import { TaskTemplateComponent } from "../shared/templates/task-template/task-template.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-component',
  imports: [TaskTemplateComponent, FormsModule],
  templateUrl: './shopping-list-component.component.html',
  styleUrl: './shopping-list-component.component.css',
})
export class ShoppingListComponentComponent {
  userInput = '';

  items = signal<string[]>(['Milk', 'Eggs', 'Bread']);

  addItem() {
    this.items.update((items) => [...items, this.userInput]);
  }
}
