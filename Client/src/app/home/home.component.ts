import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books:any;
  constructor(
    private _httpService:HttpService,
    private _router:Router,
  ){}

  ngOnInit(){
    this.getAllBooks();
  }
  getAllBooks(){
    this._httpService.getBooks().subscribe(data=>{
      this.books=data;
      for(let i =0;i< this.books.length;i++){ 
        if(this.books[i].review.length!==0)
          this.books[i]['star']=this.books[i].review.reduce(function(x,y){ return x.stars+y.stars},0)/this.books[i].review.length;
        else
          this.books[i]['star']=0;
      }
    });
  }
  goNew(){
    this._router.navigateByUrl('/new');
  }
}
