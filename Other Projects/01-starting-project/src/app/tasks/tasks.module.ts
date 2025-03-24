import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TasksComponent, TasksComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
