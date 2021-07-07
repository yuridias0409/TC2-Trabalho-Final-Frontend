import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Book } from '../classes/Book'
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DatabaseServiceBook {
  constructor(private http : HttpClient) { }

  @Output() fire: EventEmitter<any> = new EventEmitter();

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseURL = "https://tc2-trabalho-final-api.herokuapp.com/api/";

  getAllBook(user) : Observable<any> {
    return this.http.get(this.baseURL + "book/all/" + user._id);
  }

  addBook(book): Observable<any> {
    return this.http.post(this.baseURL + 'book/', book, { observe: "response" });
  }

  deleteBook(id) : Observable<any> {
    return this.http.delete(this.baseURL + 'book/' + id, { observe: "response"})
  }

  updateBook(book) : Observable<any> {
    console.log(book);
    return this.http.put(this.baseURL + 'book/' + book._id, book, { observe: "response"})
  }
  
}