import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp;
  message;
  constructor(private service:DataService,
    private router:Router,
    private routes:ActivatedRoute ) { }

  ngOnInit() {
    let paramArrivalsta=this.routes.paramMap;
    paramArrivalsta.subscribe((Params)=>{

      let No=Params.get("No");
      let statusofEmpsearch=this.service.GetDataByID(No);
      statusofEmpsearch.subscribe((result:any)=>{
        if(result.length>0)
        {
          this.emp=result[0];
          // console.log(this.emp.No);
          this.message="Record Found";

        }
        else
        {
          this.message="Record Found";
        }

  });

});

  }



  Update()
  {
    let statusofUpdate=this.service.UpdateDataById(this.emp);
    statusofUpdate.subscribe((result:any)=>{
      if(result.affectedRows>0)
      {
        this.router.navigate(['home']);

      }
      else
      {
        this.message="something went wrong";
      }

    });
  }







}
