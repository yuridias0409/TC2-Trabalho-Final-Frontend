import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DatabaseServiceUser } from '../../../database/database.service.user';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from '../../../classes/User';
import { Router } from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router, private databaseService: DatabaseServiceUser) { }

  user: User;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  onSubmitLogin() {
    if (!this.loginForm.invalid) {
      this.user = this.loginForm.value;
      this.user.password = Md5.hashStr(this.user.password);
      this.databaseService.loginUser(this.user).subscribe(res => {
        if (res.ok) {
          res.body.data = res.body.data.map(function (e) {
            return { "_id": e.id, "username": e.username, "email": e.email }
          });
          sessionStorage.setItem('user', JSON.stringify(res.body.data[0]))
          alert('Login realizado com sucesso!')
          this.user = null;
          this.router.navigate(['/home']);
        } else {
          alert('Não foi possível efetuar o login')
        }
      });
    } else {
      alert('Dados ausentes! - Preencha todos os campos')
    }
  }

  onSubmitRegister() {
    if (!this.registerForm.invalid) {
      if (this.registerForm.value.password == this.registerForm.value.confirmPassword) {
        //Seta usuário
        this.user = this.registerForm.value;
        this.user.password = Md5.hashStr(this.user.password);
        this.databaseService.addUser(this.user).subscribe(res => {
          if (res.ok) {
            res.body.data = res.body.data.map(function (e) {
              return { "_id": e.id, "username": e.username, "email": e.email }
            });
            sessionStorage.setItem('user', JSON.stringify(res.body.data[0]))
            alert('Registro realizado com sucesso!')
            this.user = null;
            location.href = location.href + '/home';
          } else {
            alert('Não foi possível efetuar o Registro')
          }
        });
      } else {
        alert('As duas senhas não conferem!')
      }
    } else {
      alert('Dados ausentes! - Preencha todos os campos')
    }
  }

  ngOnInit(): void {

  }

}
