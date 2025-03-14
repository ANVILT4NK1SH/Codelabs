import { Component, signal } from '@angular/core';
import { TaskTemplateComponent } from "../shared/templates/task-template/task-template.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [TaskTemplateComponent, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  userInput: string = '';

  tasks = signal<string[]>([
    "Make bed", "Brush teeth", "Drink coffee"
  ])

  addTask () {
    this.tasks.update((tasks) => [...tasks, this.userInput])
  }
}
