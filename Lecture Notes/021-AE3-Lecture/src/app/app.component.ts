import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListsComponent } from "./task-lists/task-lists.component";
import { FavoriteBooksComponentComponent } from "./favorite-books-component/favorite-books-component.component";
import { ProfileCardComponentComponent } from "./profile-card-component/profile-card-component.component";
import { UserStatusComponentComponent } from "./user-status-component/user-status-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListsComponent, FavoriteBooksComponentComponent, ProfileCardComponentComponent, UserStatusComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '021-AE3-Lecture';
}
