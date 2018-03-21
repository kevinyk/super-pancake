import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors: object[]=[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors(){
    this._httpService.getAuthors()
    .subscribe((data: object[]) => {
      console.log(data);
      this.authors = data;
    })
  }
  delete(id){
    this._httpService.deleteAuthor(id)
    .subscribe((data)=>{
      this.getAllAuthors();
    })
  }

}
