import { Component, input } from '@angular/core';
import { Book } from '../../shared/models/book.model';

@Component({
  selector: 'app-book-component',
  imports: [],
  templateUrl: './book-component.component.html',
  styleUrl: './book-component.component.css'
})
export class BookComponentComponent {
  book = input<Book>()
}
