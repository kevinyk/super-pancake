import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quotes-new',
  templateUrl: './quotes-new.component.html',
  styleUrls: ['./quotes-new.component.css']
})
export class QuotesNewComponent implements OnInit {
  author: any;
  quote: object = {content: ""};
  errors: string[];
  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { 
    this.author =  { name: "", _id: "" }
  }

  ngOnInit() {
    this.getOneAuthor();
  }
  getOneAuthor() {
    this._route.paramMap.subscribe((params) => {
      this._httpService.showAuthor(params.get('id'))
        .subscribe((data) => {
          console.log(data);
          this.author = data;
        })

    })
  }
  addQuote(){
    this._httpService.postQuote(this.author._id, this.quote)
    .subscribe((data:any)=>{
      console.log(data);
      this.errors = [];
      if (data.errors) {
        for (var key in data.errors) {
          this.errors.push(data.errors[key].message);
        }
      } else {
        this._router.navigate(['/quotes', this.author._id]);
      }
    })
  }
}
