import { Component, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { Task } from '../shared/models/task.model';
import { DangerBtnComponent } from '../shared/templates/buttons/danger-btn/danger-btn.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent, DangerBtnComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  btnText: string = "Delete"
  tasks = signal<Task[]>([
    {
      id: 't1',
      name: 'Do Dishes',
    },
    {
      id: 't2',
      name: 'Make Bed',
    },
    {
      id: 't3',
      name: 'Walk Dog',
    },
  ]);

  deleteHandler() {
    console.log("My logic is coming form the TaskListComponent")
  }
}
