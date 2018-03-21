import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.css']
})
export class AuthorsEditComponent implements OnInit {
  id: string;
  errors: string[]=[];
  author: object = {name: ""};
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log(params.get('id'));
      this.id = params.get('id');
      this._httpService.showAuthor(this.id)
      .subscribe((data: object)=>{
        console.log(data);
        this.author = data;
      })
    })
  }
  editAuthor(){
    this._httpService.updateAuthor(this.author)
    .subscribe((data: any)=>{
      console.log(data);
      this.errors = [];
      if (data.errors) {
        for (var key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      } else {
        this._router.navigate(['/']);
      }
    })
  }

}
