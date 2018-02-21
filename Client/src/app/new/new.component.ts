import { Component, OnInit ,Input} from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newBook:any;
  errors='';
  constructor(
    private _httpService:HttpService,
    private _router:Router,
  ) { }

  ngOnInit() {
    this.newBook={title:"",description:""};
  }
  onSubmit(){
    if('id' in this.newBook){
      console.log(this.newBook);
    }
    else{
      this._httpService.addBook(this.newBook).subscribe(data=>{
        if(data['errors']){
          console.log(data);
          this.errors=data['message'];
        }
        else{
          this.newBook={title:"",description:""};
          this._router.navigate(['/home'])
        }      
      })
    }
  }
}
