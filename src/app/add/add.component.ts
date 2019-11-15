import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  message:string;
  constructor(public service:DataService,public router:Router) { }

  Add(formdata:any)
  {
    let resultstatus=this.service.AddData(formdata.form.value);
    resultstatus.subscribe((data:any)=>{
      if(data.error==null)
      {
        this.message="Record Inserted";
        this.router.navigate(['home']);

      }
      else
      {
        this.message="Something went wrong";
      }
    });

  }

  ngOnInit() {
  }

}
