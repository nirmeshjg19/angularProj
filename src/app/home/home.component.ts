import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees;
  messages;
  constructor(public servise:DataService,
    public router:Router) { 
      this.get();
    }

  ngOnInit() 
  { }

  get()
  {

    let resultstate=this.servise.getData();
    resultstate.subscribe((data)=>{

     this.employees=data;
    
    });
  }



  delete(empNo)
  {
   
    let statusofdelete=this.servise.deleteData(empNo);
    statusofdelete.subscribe((res:any)=>{
      if(res.affectedRows>0)
      {
        this.router.navigate(['home']);
        this.get();
      }
      else
      {
        this.messages("Something went wrong");
      }

    });

  }



}
