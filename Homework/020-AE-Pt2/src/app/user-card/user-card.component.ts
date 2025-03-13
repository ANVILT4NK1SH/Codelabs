import { Component, Input } from '@angular/core';
import { User } from '../models/user-model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  @Input() userName: string = "Shawn";
  @Input() userAge: number = 39;


}





