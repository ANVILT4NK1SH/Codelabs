import { Component } from '@angular/core';
import { UserCardComponent } from "./user-card/user-card.component";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [UserCardComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '021_AE3';
}
