import { Component, signal } from '@angular/core';
import { TaskTemplateComponent } from "../shared/templates/task-template/task-template.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-colors',
  imports: [TaskTemplateComponent, FormsModule],
  templateUrl: './favorite-colors.component.html',
  styleUrl: './favorite-colors.component.css'
})
export class FavoriteColorsComponent {
  userInput = ""

  colors = signal<string []>([
    'Red',
    'Blue',
    'Green'
  ])

  addColor() {
    this.colors.update((colors) => [...colors, this.userInput]);
  }

  deleteHandler() {
    
  }
}
