import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayInputComponent } from './display-input/display-input.component';

@Component({
  standalone: true,
  selector: 'app-form',
  imports: [FormsModule, DisplayInputComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  usernameInput = ''
username = signal<string | undefined>(undefined);
  onClick() {
    const newUsername = this.usernameInput
    this.username.set(this.usernameInput)
    console.log(this.username());

  }



}
