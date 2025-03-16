import { Component, input } from '@angular/core';

@Component({
  selector: 'app-display-data-template',
  imports: [],
  templateUrl: './display-data-template.component.html',
  styleUrl: './display-data-template.component.css'
})
export class DisplayDataTemplateComponent {
  data = input()
}
