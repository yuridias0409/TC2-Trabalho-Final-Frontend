import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/classes/Author';
import { DatabaseServiceAuthor } from '../../../database/database.service.author';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {

  constructor(private router: Router, private databaseServiceAuthor: DatabaseServiceAuthor, private modalService: NgbModal) { }

  authors : Author[];
  selectedAuthor : Author;
  user : User;

  getUser(): User{
    return this.user = JSON.parse(sessionStorage.getItem('user'))
  }

  editAuthor(author, content){
    this.selectedAuthor = author;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  removeAuthor(author){
    if(confirm("Você deseja realmente remover o autor: " + author.name)){
      this.databaseServiceAuthor.deleteAuthor(author._id).subscribe(res => {
        if(res.ok == true) {
          alert("Autor removido com sucesso!");
          location.href = location.href;
        } else {
          alert("Não foi possível remover o autor!");
        }
      });
    }
  }

  ngOnInit(): void {
    this.databaseServiceAuthor.getAllAuthor(this.getUser()).subscribe(res => {
      this.authors = res.data.map(function(e){
        return {"_id": e.id, "name": e.nome, "userid": e.usuario}
      });
    });
  }

}
