import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url='https://gorest.co.in/public/v2/users';
url1='../data/data.json'
  constructor(private http:HttpClient) { }

  showData(data:any){
    
  }
  
  getdata(){
   

    console.log(this.url1);
    
    return this.http.get(this.url1)
  }
}
