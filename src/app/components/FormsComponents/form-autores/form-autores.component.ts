import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from 'src/app/classes/Author';
import { DatabaseServiceAuthor } from '../../../database/database.service.author';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-form-autores',
  templateUrl: './form-autores.component.html',
  styleUrls: ['./form-autores.component.css']
})
export class FormAutoresComponent implements OnInit {

  constructor(private router: Router, private databaseServiceAuthor: DatabaseServiceAuthor) { }

  author : Author;
  user : User;

  authorForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  getUser(): User{
    return this.user = JSON.parse(sessionStorage.getItem('user'))
  }

  onSubmitAuthor(){
    if(!this.authorForm.invalid){
      this.author = this.authorForm.value;
      this.author.userid = this.getUser()._id;
      this.databaseServiceAuthor.addAuthor(this.author).subscribe(res => {
        if(res.ok){
          //Redirecionar para listagem
          this.router.navigate(['/autores']);
        } else{
          alert('Não foi possível efetuar o cadastro do autor')
        }
      });
    } else{
      alert('Dados ausentes! - Preencha todos os campos')
    }
  }

  ngOnInit(): void {
  }

}
