import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title1 = "Welcome!!"
  title2 = "This is ANGULAR!!!"
  toggle = false

  changeHeaderButton () {
    this.toggle = !this.toggle;
  }
}
