import { Component, OnInit } from '@angular/core';
import { DatabaseServiceAuthor } from '../../../database/database.service.author';
import { DatabaseServiceBook } from '../../../database/database.service.book';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/classes/Author';
import { Router } from '@angular/router';
import { Book } from 'src/app/classes/Book';
import { User } from 'src/app/classes/User';


@Component({
  selector: 'app-form-livros',
  templateUrl: './form-livros.component.html',
  styleUrls: ['./form-livros.component.css']
})
export class FormLivrosComponent implements OnInit {

  constructor(private router: Router, private databaseServiceAuthor: DatabaseServiceAuthor, private DatabaseServiceBook: DatabaseServiceBook) { }

  authors : Author[];
  book : Book;
  user : User;

  bookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    pages: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  });

  getUser(): User{
    return this.user = JSON.parse(sessionStorage.getItem('user'))
  }

  onSubmitBook(){
    if(!this.bookForm.invalid){
      this.book = this.bookForm.value;
      this.book.userid = this.getUser()._id;
      this.DatabaseServiceBook.addBook(this.book).subscribe(res => {
        if(res.ok){
          //Redirecionar para listagem
          this.router.navigate(['/livros']);
        } else{
          alert('Não foi possível efetuar o cadastro do livro')
        }
      });
    } else{
      alert('Dados ausentes! - Preencha todos os campos')
    }
  }

  ngOnInit(): void {
    //Recupera todos os Autores
    this.databaseServiceAuthor.getAllAuthor(this.getUser()).subscribe(res => {
      this.authors = res.data.map(function(e){
        return {"_id": e.id, "name": e.nome, "userid": e.usuario}
      });
    });

    //Caso não tenha autor, manda ele cadastrar um autor
    //Descomendar o código abaixo
    /*
    if(this.authors == null){
      alert("Atenção!! -- Cadastre um AUTOR antes de cadastrar um LIVRO")
      this.router.navigate(['/formAutor']);
    }
    */
  }

}
