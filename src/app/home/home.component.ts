import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../ser/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data:any;
constructor(private ser:ServiceService,private http:HttpClient){}

goto(){
 
// this.ser.getdata().subscribe(data=>{
//   this.data=data;
  
// })

const url = '/datas/data.json';
const url1 = '/assets/data.json';
  this.http.get(url).subscribe(data=>{
    console.log(data);
  })
  this.http.get(url1).subscribe(data=>{
    console.log(data);
  })
}
}
