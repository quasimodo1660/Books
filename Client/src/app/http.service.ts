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
  update(id,book){
    return this._http.put('/books/'+id,book)
  }
  remove(id){
    return this._http.delete('/books/'+id)
  }
  increse(id){
    return this._http.put('/books/inc/'+id,'')
  }
  addReview(id,review){
    return this._http.post('/review/'+id,review)
  }
}
