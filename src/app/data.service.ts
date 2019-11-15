import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public http:HttpClient) { }

  getData()
  {
    return this.http.get("http://13.233.253.68:4008/employees");
  }

  AddData(emp)
  {
    return this.http.post("http://13.233.253.68:4008/employees",emp);
  }

  deleteData(No)
  {
    return this.http.delete("http://13.233.253.68:4008/employees/" +No);
  }

  GetDataByID(No)
  {
    return this.http.get("http://13.233.253.68:4008/employees/"+No);
  }
  UpdateDataById(empObject)
  {
    return this.http.put("http://13.233.253.68:4008/employees/"+empObject.No,empObject);
  }
}
