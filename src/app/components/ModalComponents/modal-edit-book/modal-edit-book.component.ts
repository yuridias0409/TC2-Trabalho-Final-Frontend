import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseServiceBook } from '../../../database/database.service.book';
import { DatabaseServiceAuthor } from 'src/app/database/database.service.author';
import { Router } from '@angular/router';
import { Book } from 'src/app/classes/Book';
import { User } from 'src/app/classes/User';
import { Author } from 'src/app/classes/Author';

@Component({
  selector: 'app-modal-edit-book',
  templateUrl: './modal-edit-book.component.html',
  styleUrls: ['./modal-edit-book.component.css']
})
export class ModalEditBookComponent implements OnInit {

  constructor(private router: Router, private databaseServiceBook: DatabaseServiceBook, private databaseServiceAuthor: DatabaseServiceAuthor) { }

  @Input() book: Book;
  user : User;
  authors : Author[];

  bookForm : FormGroup;

  getUser(): User{
    return this.user = JSON.parse(sessionStorage.getItem('user'))
  }
  
  onSubmitBook(){
    if(!this.bookForm.invalid){
      //Seta dados do livro
      this.book.name = this.bookForm.value.name;
      this.book.gender = this.bookForm.value.gender;
      this.book.pages = this.bookForm.value.pages;
      this.book.author = this.bookForm.value.author;

      this.databaseServiceBook.updateBook(this.book).subscribe(res => {
        if(res.ok){
          alert('Livro editado com sucesso!')
          location.href = location.href;
        } else{
          alert('Não foi possível efetuar a edição do livro')
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


    this.bookForm = new FormGroup({
      name: new FormControl(this.book.name, Validators.required),
      gender: new FormControl(this.book.gender, Validators.required),
      pages: new FormControl(this.book.pages, Validators.required),
      author: new FormControl(this.book.author, Validators.required)
    });
  }

}
