import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteRotatorComponent } from "./quote-rotator/quote-rotator.component";
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuoteRotatorComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '020-AE-Pt2';
}


