import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Author } from '../classes/Author'
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DatabaseServiceAuthor {
  constructor(private http : HttpClient) { }

  @Output() fire: EventEmitter<any> = new EventEmitter();

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseURL = "https://tc2-trabalho-final-api.herokuapp.com/api/";

  getAllAuthor(user) : Observable<any> {
    return this.http.get(this.baseURL + "author/all/" + user._id);
  }

  addAuthor(author): Observable<any> {
    return this.http.post(this.baseURL + 'author/', author, { observe: "response" });
  }

  deleteAuthor(id) : Observable<any> {
    return this.http.delete(this.baseURL + 'author/' + id, { observe: "response"})
  }

  updateAuthor(author) : Observable<any> {
    return this.http.put(this.baseURL + 'author/' + author._id, author, { observe: "response"})
  }
  
}