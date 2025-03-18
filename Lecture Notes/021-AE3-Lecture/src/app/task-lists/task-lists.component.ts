import { Component, signal } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { TaskItemComponent } from "./task-item/task-item.component";

@Component({
  selector: 'app-task-lists',
  imports: [TaskItemComponent],
  templateUrl: './task-lists.component.html',
  styleUrl: './task-lists.component.css'
})
export class TaskListsComponent {
  tasks = signal<Task[]>([
    {
      id: 't1',
      task: 'Make Bed'
    },
    {
      id: 't2',
      task: 'Clean Room'
    },
    {
      id: 't3',
      task: 'Do Dishers'
    }
  ])
}
