import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { BOOKS } from './mock-books';

@Injectable()
export class BookService {

  constructor() { }

  getBooks() {
    return BOOKS;
  }
}
