import { Component, signal } from '@angular/core';
import { UserTemaplateComponent } from "../shared/templates/user-temaplate/user-temaplate.component";
import { FormsModule } from '@angular/forms';
import { User } from '../shared/models/user.model';


@Component({
  selector: 'app-user-profile-component',
  imports: [UserTemaplateComponent, FormsModule],
  templateUrl: './user-profile-component.component.html',
  styleUrl: './user-profile-component.component.css'
})
export class UserProfileComponentComponent {

  nameInput!: string;
  ageInput!: number;
  user = signal<User>({name: 'Shawn', age: 39}) 

  updateName(){
    // Update the signal with a new object, spreading the current value and overriding the name
    this.user.update((currentUser) => ({
      ...currentUser,
      name: this.nameInput,
    }));
  }

  updateAge(){
    // Update the signal with a new object, spreading the current value and overriding the age
    this.user.update((currentUser) => ({
      ...currentUser,
      age: this.ageInput,
    }));
  }
}
