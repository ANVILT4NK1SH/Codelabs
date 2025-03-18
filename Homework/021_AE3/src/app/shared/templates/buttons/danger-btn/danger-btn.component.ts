import { Component, input } from '@angular/core';

@Component({
  selector: 'app-danger-btn',
  imports: [],
  templateUrl: './danger-btn.component.html',
  styleUrl: './danger-btn.component.css'
})
export class DangerBtnComponent {
  btnText = input<string>()
}
