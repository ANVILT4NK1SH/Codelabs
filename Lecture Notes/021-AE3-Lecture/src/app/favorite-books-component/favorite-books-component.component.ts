import { Component, signal } from '@angular/core';
import { Book } from '../shared/models/book.model';
import { BookComponentComponent } from './book-component/book-component.component';

@Component({
  selector: 'app-favorite-books-component',
  imports: [BookComponentComponent],
  templateUrl: './favorite-books-component.component.html',
  styleUrl: './favorite-books-component.component.css'
})
export class FavoriteBooksComponentComponent {
  books = signal<Book[]>([
    {
      title: 'Pet Semetary',
      author: 'Stephen King'
    },
  ])
}
