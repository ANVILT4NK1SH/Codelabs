import { Component, signal, computed } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);

  imagePath = computed(
    () => 'assets/users/users/' + this.selectedUser().avatar
  );

  // get imagePath() {
  //   return 'assets/users/users/' + this.selectedUser().avatar;
  // }

  //Changes user on click
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
