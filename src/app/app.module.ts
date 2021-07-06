import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/OtherComponents/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/OtherComponents/home/home.component';
import { ListarAutoresComponent } from './components/ListarComponents/listar-autores/listar-autores.component';
import { ListarLivrosComponent } from './components/ListarComponents/listar-livros/listar-livros.component';
import { FormLivrosComponent } from './components/FormsComponents/form-livros/form-livros.component';
import { FormAutoresComponent } from './components/FormsComponents/form-autores/form-autores.component';
import { NavbarComponent } from './components/OtherComponents/navbar/navbar.component';
import { ModalEditAuthorComponent } from './components/ModalComponents/modal-edit-author/modal-edit-author.component';
import { ModalEditBookComponent } from './components/ModalComponents/modal-edit-book/modal-edit-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListarAutoresComponent,
    ListarLivrosComponent,
    FormLivrosComponent,
    FormAutoresComponent,
    NavbarComponent,
    ModalEditAuthorComponent,
    ModalEditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
