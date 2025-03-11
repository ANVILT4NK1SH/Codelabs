import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-display-input',
  imports: [],
  templateUrl: './display-input.component.html',
  styleUrl: './display-input.component.css'
})
export class DisplayInputComponent {
  data = input()
}
