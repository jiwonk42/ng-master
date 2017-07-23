import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit{
  books: Book[];

  constructor(private router: Router, private bookService: BookService) { }
  /*constructor (public title: string, public author: string,
   public price: number, public image: string, public description: string, public id: number) */

  goToDetailPage(clickedBook: Book) {
    this.router.navigate(['books', clickedBook.id]);
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }
}
