import { Component, OnInit } from '@angular/core';
import { DatabaseServiceBook } from '../../../database/database.service.book';
import { Router } from '@angular/router';
import { Book } from 'src/app/classes/Book';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})

export class ListarLivrosComponent implements OnInit {

  constructor(private router: Router, private databaseServiceBook: DatabaseServiceBook) { }

  books: Book[];
  user: User;

  getUser(): User {
    return this.user = JSON.parse(sessionStorage.getItem('user'))
  }

  editBook(book) {

  }

  removeBook(book) {
    if (confirm("Você deseja realmente remover o autor: " + book.name)) {
      this.databaseServiceBook.deleteBook(book._id).subscribe(res => {
        if (res.ok == true) {
          alert("Livro removido com sucesso!");
          location.href = location.href;
        } else {
          alert("Não foi possível remover o livro!");
        }
      });
    }
  }

  ngOnInit(): void {
    this.databaseServiceBook.getAllBook(this.getUser()).subscribe(res => {
      this.books = res.data.map(function (e) {
        return { "_id": e.id, "name": e.nome, "gender": e.genero, "pages": e.pages, "author": e.autor, "userid": e.usuario }
      });
    });
  }

}
