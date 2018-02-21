import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {
  constructor(private _http:HttpClient) { }
  getBooks(){
    return this._http.get('/books');
  }
  addBook(book){
    return this._http.post('/books',book)
  }
  getOne(id){
    return this._http.get('/books/'+id)
  }
}
