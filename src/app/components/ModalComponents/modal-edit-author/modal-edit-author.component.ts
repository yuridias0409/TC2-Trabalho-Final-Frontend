import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseServiceAuthor } from 'src/app/database/database.service.author';
import { Author } from 'src/app/classes/Author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-edit-author',
  templateUrl: './modal-edit-author.component.html',
  styleUrls: ['./modal-edit-author.component.css']
})
export class ModalEditAuthorComponent implements OnInit {

  constructor(private router: Router, private databaseServiceAuthor: DatabaseServiceAuthor) {}

  @Input() author: Author;

  authorForm : FormGroup;

  onSubmitAuthor(){
    if(!this.authorForm.invalid){
      this.author.name = this.authorForm.value.name;
      this.databaseServiceAuthor.updateAuthor(this.author).subscribe(res => {
        if(res.ok){
          //Redirecionar para listagem
          alert('Autor editado com sucesso!')
          location.href = location.href;
        } else{
          alert('Não foi possível efetuar a edição do autor')
        }
      });
    } else{
      alert('Dados ausentes! - Preencha todos os campos')
    }
  }

  ngOnInit(): void {
    this.authorForm = new FormGroup({
      name: new FormControl(this.author.name, Validators.required)
    });
  }

}
