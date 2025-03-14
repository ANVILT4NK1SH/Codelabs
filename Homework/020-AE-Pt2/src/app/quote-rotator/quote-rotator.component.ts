import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-quote-rotator',
  imports: [],
  templateUrl: './quote-rotator.component.html',
  styleUrl: './quote-rotator.component.css',
})
export class QuoteRotatorComponent {
  quotes = signal<string[]>([
    'The best way to predict the future is to create it.',
    'Success is not final, failure is not fatal.',
    'Do what you can, with what you have, where you are.',
  ]);

  currentQuote = signal(this.quotes()[0])

  nextQuoteHandler() {
    const currentIndex = this.quotes().indexOf(this.currentQuote())

    const nextIndex = (currentIndex + 1) % this.quotes().length;

    this.currentQuote.set(this.quotes()[nextIndex])
  }

  

}
