import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-template',
  imports: [],
  templateUrl: './task-template.component.html',
  styleUrl: './task-template.component.css'
})
export class TaskTemplateComponent {
 data = input()
}
