import { Component } from '@angular/core';
import { Book } from '../book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor(private router: Router) { }
  /*constructor (public title: string, public author: string,
   public price: number, public image: string, public description: string, public id: number) */

  goToDetailPage(clickedBook: Book) {
    this.router.navigate(['books', clickedBook.id]);
  }
}
