import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  newBook={};
  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._httpService.getOne(this._route.params['value'].id).subscribe(data=>{
      this.newBook['title']=data[0].title;
      this.newBook['description']=data[0].description;
      this.newBook['id']=data[0]._id;
    })
  }

}
