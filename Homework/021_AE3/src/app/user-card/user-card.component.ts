import { Component, signal } from '@angular/core';
import { DangerBtnComponent } from "../shared/templates/buttons/danger-btn/danger-btn.component";

@Component({
  selector: 'app-user-card',
  imports: [DangerBtnComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  btnText = "Remove"
  user = signal({
    id: 'u1',
    name: 'Shawn',
    avatar: ''
  })

  onClick () {
    console.log("Logic from the UserCardComponent")
  }
  
}
