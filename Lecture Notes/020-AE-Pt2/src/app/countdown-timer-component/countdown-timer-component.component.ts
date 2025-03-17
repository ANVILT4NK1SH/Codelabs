import { Component, signal } from '@angular/core';
import { DisplayDataTemplateComponent } from '../shared/templates/display-data-template/display-data-template.component';

@Component({
  selector: 'app-countdown-timer-component',
  imports: [DisplayDataTemplateComponent],
  templateUrl: './countdown-timer-component.component.html',
  styleUrl: './countdown-timer-component.component.css',
})
export class CountdownTimerComponentComponent {
  initialTime = 10;
  counter = this.initialTime;
  timer = signal<number | string>(this.initialTime);
  
  isVisible = true;

  startHandler() {
    this.isVisible = false;
    this.counter = this.initialTime;
    this.timer.set(this.initialTime);

    const intervalId = setInterval(() => {
      this.counter--
      this.timer.set(this.counter);
    }, 1000);

    setTimeout(() => {
      this.timer.set("Times's up!");
      clearInterval(intervalId);
      this.isVisible = true;
    }, (this.initialTime) * 1000);
  }
}
