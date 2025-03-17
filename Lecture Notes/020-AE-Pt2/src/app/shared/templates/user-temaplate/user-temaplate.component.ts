import { Component, input } from '@angular/core';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-user-temaplate',
  imports: [],
  templateUrl: './user-temaplate.component.html',
  styleUrl: './user-temaplate.component.css'
})
export class UserTemaplateComponent {
  data = input<User>()
}
