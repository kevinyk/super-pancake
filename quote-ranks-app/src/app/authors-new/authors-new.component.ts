import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-authors-new',
  templateUrl: './authors-new.component.html',
  styleUrls: ['./authors-new.component.css']
})
export class AuthorsNewComponent implements OnInit {
  newAuthor: any = {name: ""};
  errors: string[] = [];
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
  addAuthor(){
    console.log('addAuthor');
    this._httpService.postAuthor(this.newAuthor)
    .subscribe((data:any)=>{
      console.log(data);
      this.errors = [];
      if(data.errors){
        for (var key in data.errors){
          this.errors.push(data.errors[key].message);
        }
      }else{
        this._router.navigate(['/']);
      }
    })
  }

}
