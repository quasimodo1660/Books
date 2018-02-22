import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  newBook={};
  errors:any;
  id:any;
  review={};
  flag:any;

  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBook();
    this.review={reader:"",stars:1,note:""};
    this.flag='Add a review';
  }

  onSubmit(){
    if(this.flag=='Edit the review'){
      this.updateBook(this.id,this.newBook);
    }
    else{
      this._httpService.addReview(this.id,this.review).subscribe(data=>{
        if(data['errors']){
          console.log(data);
          this.errors=data
        }
        else{
          this.review={reader:"",stars:1,note:""};
          this.getBook();
        }
      })
    }  
  }

  getBook(){
    this._httpService.getOne(this._route.params['value'].id).subscribe(data=>{
      this.newBook=data[0];
      this.id=data[0]._id;
    })
  }
  deleteReview(_review){
    this.newBook['review']=this.newBook['review'].filter(e=>e!==_review);
    this.updateBook(this.id,this.newBook);
    
  }
  editReview(index){
    this.flag='Edit the review'
    this.review=this.newBook['review'][index];
  }
  updateBook(id,book){
    this._httpService.update(id,book).subscribe(data=>{
      if(data['errors']){
        this.errors=data['message'];
      }
      else{
        this.getBook();
        this.review={reader:"",stars:1,note:""};
        this.flag='Add a review';
      }
    })
  }
}
