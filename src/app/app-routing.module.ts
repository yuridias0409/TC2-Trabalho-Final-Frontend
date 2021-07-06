import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/OtherComponents/home/home.component';
import { ListarAutoresComponent } from './components/ListarComponents/listar-autores/listar-autores.component';
import { ListarLivrosComponent } from './components/ListarComponents/listar-livros/listar-livros.component';
import { FormAutoresComponent } from './components/FormsComponents/form-autores/form-autores.component';
import { FormLivrosComponent } from './components/FormsComponents/form-livros/form-livros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'autores', component: ListarAutoresComponent },
  { path: 'livros', component: ListarLivrosComponent },
  { path: 'formAutor', component: FormAutoresComponent },
  { path: 'formLivro', component: FormLivrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
