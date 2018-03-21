import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  postAuthor(authorObj){
    console.log('postAuthor');
    return this._http.post('/authors', authorObj);
  }
  getAuthors(){
    return this._http.get('/authors');
  }
  showAuthor(id){
    return this._http.get('/authors/'+id);
  }
  updateAuthor(authorObj){
    return this._http.put('/authors/'+authorObj._id, authorObj);
  }
  deleteAuthor(authorId){
    return this._http.delete('/authors/' + authorId);
  }
  postQuote(authorId, quoteObj){
    return this._http.post('/quotes/'+authorId, quoteObj);
  }
  postUpVote(authorId, quoteId){
    return this._http.post('/authors/'+authorId+'/quotes/'+quoteId, {vote: "up"})
  }
  postDownVote(authorId, quoteId){
    return this._http.post('/authors/' + authorId + '/quotes/' + quoteId, { vote: "down" })
  }
}
