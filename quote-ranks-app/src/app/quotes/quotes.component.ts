import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  author: any= {name: '', quotes: []};
  constructor(private _httpService: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getOneAuthor();
  }
  getOneAuthor(){
    this._route.paramMap.subscribe((params)=>{
      this._httpService.showAuthor(params.get('id'))
      .subscribe((data)=>{
        console.log(data);
        this.author = data;
      })

    })
  }
  voteUp(quoteId){
    this._httpService.postUpVote(this.author._id, quoteId)
    .subscribe((data)=>{
      console.log(data);
      this.getOneAuthor();
    })
  }
  voteDown(quoteId){
    this._httpService.postDownVote(this.author._id, quoteId)
      .subscribe((data) => {
        console.log(data);
        this.getOneAuthor();
      })
  }

}
