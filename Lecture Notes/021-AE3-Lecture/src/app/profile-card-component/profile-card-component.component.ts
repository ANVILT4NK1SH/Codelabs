import { Component } from '@angular/core';
import { User } from '../shared/models/user.modes';

@Component({
  selector: 'app-profile-card-component',
  imports: [],
  templateUrl: './profile-card-component.component.html',
  styleUrl: './profile-card-component.component.css'
})
export class ProfileCardComponentComponent {
  isLoggedIn = true;
  user: User = {
    name: 'Shawn',
    avatar: '',
  }
}
