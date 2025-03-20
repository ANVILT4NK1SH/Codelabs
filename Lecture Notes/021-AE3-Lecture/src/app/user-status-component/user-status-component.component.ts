import { Component, signal } from '@angular/core';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-user-status-component',
  imports: [UserComponent],
  templateUrl: './user-status-component.component.html',
  styleUrl: './user-status-component.component.css'
})
export class UserStatusComponentComponent {
  userStatus = signal<string | unknown>('banned')
}
