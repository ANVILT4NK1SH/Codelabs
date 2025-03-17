import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from "./task-list/task-list.component";
import { FavoriteColorsComponent } from "./favorite-colors/favorite-colors.component";
import { ClickCounterComponent } from "./click-counter/click-counter.component";
import { TempConverterComponent } from "./temp-converter/temp-converter.component";
import { CalculatorComponentComponent } from "./calculator-component/calculator-component.component";
import { CountdownTimerComponentComponent } from "./countdown-timer-component/countdown-timer-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListComponent, FavoriteColorsComponent, ClickCounterComponent, TempConverterComponent, CalculatorComponentComponent, CountdownTimerComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '020-AE-Pt2';
}
